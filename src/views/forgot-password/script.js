import Axios from "axios";

export default {
  name: "ForgotPassword",
  data() {
    return {
      property: {
        isLoading: false,
        isLoading2: false,
      },
      dataForm: {
        email: "",
        newPasssword: "",
        confirmPassword: "",
      },
      codeOtp: "",
      errorMessage: "",
      confirmEmail: false,
      emailNotFound: false,
      showModelOtp: false,
    };
  },
  methods: {
    async changePassword() {
      if (this.dataForm.newPasssword !== this.dataForm.confirmPassword) {
        this.$buefy.toast.open({
          duration: 3000,
          message: "New password dan Confirm Password harus sama",
          type: "is-danger",
        });
        return;
      }
      this.property.isLoading = true;
      const res = await Axios({
        url: `https://fuex-service.herokuapp.com/change-password`,
        method: "PUT",
        data: {
          code: this.codeOtp,
          newPassword: this.dataForm.newPasssword,
          confirmPassword: this.dataForm.confirmPassword,
        },
      });
      if (res.data.message === "ERROR") {
        this.emailNotFound = true;
        this.errorMessage = res.data.content;
      } else {
        this.$buefy.toast.open({
          duration: 2000,
          message: "Password successfully changed",
          type: "is-success",
        });
        setTimeout(() => {
          var convertToString = JSON.stringify(res.data.content);
          sessionStorage.setItem("User_Data_Login", convertToString);
          window.location.reload();
        }, 2000);
      }
      this.property.isLoading = false;
    },
    async validationCode() {
      this.property.isLoading2 = true;
      const res = await Axios({
        url: `https://fuex-service.herokuapp.com/change-password/valid-code`,
        method: "GET",
        headers: {
          code: this.codeOtp,
        },
      });
      if (res.data.message === "ERROR") {
        this.$buefy.toast.open({
          duration: 1500,
          message: res.data.content,
          type: "is-danger",
        });
      } else {
        this.$buefy.toast.open({
          duration: 3000,
          message: "Verification Code True",
          type: "is-success",
        });
        this.confirmEmail = true;
        this.showModelOtp = false;
      }
      this.property.isLoading2 = false;
    },
    async requestForgotPassword() {
      if (this.dataForm.email === "") {
        return;
      }
      this.property.isLoading = true;
      const res = await Axios({
        url: `https://fuex-service.herokuapp.com/change-password/request`,
        method: "GET",
        headers: {
          email: this.dataForm.email,
        },
      });
      if (res.data.message === "ERROR") {
        this.errorMessage = res.data.content;
        this.emailNotFound = true;
      } else {
        this.showModelOtp = true;
        setTimeout(() => {
          this.codeOtp = res.data.content.code;
        }, 2000);
        setTimeout(() => {
          this.validationCode();
        }, 2500);
      }
      this.property.isLoading = false;
    },
    async filteringAcces() {
      if (this.dataForm.newPasssword) {
        this.$buefy.toast.open({
          duration: 1500,
          message: "New password cannot be empty",
          type: "is-danger",
        });
        return;
      }
      this.property.isLoading = true;
      const payload = {
        accessCode: "91298",
        newPassword: this.dataForm.newPasssword,
        confirmPassword: this.dataForm.confirmPassword,
      };
      const res = await Axios({
        url: `https://fuex-service.herokuapp.com/change-password`,
        method: "PUT",
        data: payload,
      });
      if (res.data.message === "SUCCESS") {
        setTimeout(() => {
          this.property.isLoading = false;
          this.showModelOtp = true;
          return;
        }, 700);
      } else {
        this.property.isLoading = false;
        this.emailNotFound = true;
        this.errorMessage = res.data.content;
        return;
      }
    },
  },
};

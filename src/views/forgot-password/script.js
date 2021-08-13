import Axios from "axios";

export default {
  name: "ForgotPassword",
  data() {
    return {
      property: {
        isLoading: false,
      },
      emailNotFound: false,
    };
  },
  methods: {
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
          this.property.otpAccess = true;
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

export default {
  name: "Login",
  data() {
    return {
      dataForm: {
        email: "",
        password: "",
        accessCode: "",
        newPasssword: "",
        confirmPassword: "",
        otpCode: "",
      },
      property: {
        isLoading: false,
        showAccess: false,
        otpAccess: false,
        otpLogin: false,
        showChangePassword: false,
      },
      emailNotFound: false,
      errorMessage: "",
    };
  },
  methods: {
    routePageRegister() {
      this.$router.push("register");
    },
    async toLogin() {
      if (this.dataForm.email === "") {
        return;
      }
      this.property.isLoading = true;
      try {
        const resp = await this.$store.dispatch({
          type: "LOGIN",
          reqUrl: "login",
          headers: {
            email: this.dataForm.email,
            password: this.dataForm.password,
          },
        });
        console.log(resp.data);
        if (resp.data.message === "SUCCESS") {
          this.$buefy.toast.open({
            duration: 1000,
            message: resp.data.message,
            type: "is-success",
          });
          setTimeout(() => {
            this.property.isLoading = false;
            this.dataForm.email = "";
            this.dataForm.password = "";
            var convertToString = JSON.stringify(resp.data.content);
            // window.location.reload();
            sessionStorage.setItem("User_Data_Login", convertToString);
            return;
          }, 1500);
        } else {
          this.property.isLoading = false;
          this.emailNotFound = true;
          this.errorMessage = res.data.content;
          return;
        }
      } catch (error) {
        console.log(error);
      }
    },
    cleareErrorMessage() {
      this.emailNotFound = false;
      this.property.otpLogin = false;
      this.property.otpAccess = false;
      this.errorMessage = "";
    },
    forgotPassword() {
      this.$router.push("forgot-password");
    },
  },
};

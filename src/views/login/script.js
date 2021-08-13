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
        const res = await this.$store.dispatch({
          type: "LOGIN",
          reqUrl: "login",
          headers: {
            email: this.dataForm.email,
            password: this.dataForm.password,
          },
        });
        if (res.data.message === "SUCCESS") {
          this.$buefy.toast.open({
            duration: 1500,
            message: res.data.message,
            type: "is-success",
          });
          setTimeout(() => {
            this.property.isLoading = false;
            this.$router.push("Home");
            this.dataForm.email = "";
            this.dataForm.password = "";
            return;
          }, 700);
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

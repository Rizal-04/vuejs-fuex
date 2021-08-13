// import Axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      property: {
        isLoading: false,
        alreadyExist: {
          isLoading: false,
        },
        checkingUser: {
          isLoading: false,
        },
        register: {
          isLoading: false,
        },
        modal: {
          showModalAlreadyExist: false,
          showModalOtp: false,
        },
      },
      identifier: {
        isEmail: true,
      },
      dataForm: {
        codeOtp: "",
        implementsEmailUser: "",
        checkingUser: {
          emailUser: "",
        },
        register: {
          username: "",
          lastName: "",
          email: "",
          mobilePhoneNumber: "",
        },
      },
    };
  },
  methods: {
    routePageLogin() {
      this.$router.push("login");
    },
    async confirm() {
      const timeout = 1500;
      if (this.dataForm.checkingUser.emailUser === "") {
        return;
      } else {
        this.property.checkingUser.isLoading = true;
        const headers = { email: this.dataForm.checkingUser.emailUser };
        try {
          const resp = await this.$store.dispatch({
            type: "GET_DATA",
            reqUrl: "checking-avalibility-user",
            headers: headers,
          });
          // console.log(resp);
          if (resp.data.message === "SUCCESS") {
            setTimeout(() => {
              this.dataForm.implementsEmailUser = resp.data.content.email;
              this.dataForm.checkingUser.emailUser = "";
              this.property.checkingUser.isLoading = false;
              this.property.modal.showModalOtp = true;
            }, timeout);
          } else {
            setTimeout(() => {
              this.dataForm.checkingUser.emailUser = "";
              this.property.checkingUser.isLoading = false;
              this.property.modal.showModalAlreadyExist = true;
            }, timeout);
          }
        } catch (error) {
          console.error(error);
        }
      }
    },
    async handleRegister() {
      if (
        this.dataForm.register.username === "" ||
        this.dataForm.register.lastName === "" ||
        this.dataForm.register.mobilePhoneNumber === ""
      ) {
        return;
      } else {
        this.property.register.isLoading = true;
        const payload = {
          username: this.dataForm.register.username,
          fullName: this.dataForm.register.lastName,
          email: this.dataForm.register.email,
          mobilePhoneNumber: this.dataForm.register.mobilePhoneNumber,
        };

        // hardcord
        // const resp = await Axios({
        //   url: `https://fuex-service.herokuapp.com/register`,
        //   method: "POST",
        //   data: payload,
        // });
        // console.log(resp);

        try {
          const resp = await this.$store.dispatch({
            type: "POST_DATA",
            reqUrl: "register",
            payload: payload,
          });
          console.log(resp);
          if (resp.data.message === "SUCCESS") {
            this.$buefy.toast.open({
              duration: 2000,
              message: resp.data.message,
              type: "is-success",
              onConfirm: () => this.cleardataFormRegister(),
            });
            var convertToString = JSON.stringify(resp.data.content);
            sessionStorage.setItem("user_data", convertToString);
            this.$router.push("/");
          } else {
            this.$buefy.toast.open({
              duration: 1500,
              message: resp.data.content,
              type: "is-danger",
            });
          }
        } catch (error) {
          console.log(error);
        }
        this.property.register.isLoading = false;
      }
    },
    cleardataFormRegister() {
      this.dataForm.register.username = "";
      this.dataForm.register.lastName = "";
      this.dataForm.register.email = "";
    },
    closeModalAlreadyExist() {
      this.property.alreadyExist.isLoading = true;
      this.property.modal.showModalAlreadyExist = false;
      this.property.alreadyExist.isLoading = false;
    },
    async validationRegister() {
      const payload = {
        otp: this.dataForm.codeOtp,
        email: this.dataForm.implementsEmailUser,
      };
      this.property.isLoading = true;
      try {
        const resp = await this.$store.dispatch({
          type: "GET_DATA",
          reqUrl: `checking-otp?otp=${this.dataForm.codeOtp}&email=${this.dataForm.implementsEmailUser}`,
          params: payload,
        });
        if (resp.data.message === "SUCCESS") {
          this.dataForm.register.email = resp.data.content.email;
          this.property.modal.showModalOtp = false;
          this.identifier.isEmail = false;
          this.property.isLoading = false;
        } else {
          this.$buefy.toast.open({
            duration: 1500,
            message: resp.data.content,
            type: "is-danger",
          });
          this.property.isLoading = false;
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};

// import Axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      property: {
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
        checkingUser: {
          emailUser: "",
        },
        register: {
          firstName: "",
          lastName: "",
          email: "",
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
          console.log(resp);
          if (resp.data.message === "SUCCESS") {
            setTimeout(() => {
              this.dataForm.checkingUser.emailUser = "";
              this.property.checkingUser.isLoading = false;
              this.property.modal.showModalAlreadyExist = true;
            }, timeout);
          } else {
            setTimeout(() => {
              this.dataForm.checkingUser.emailUser = "";
              this.property.checkingUser.isLoading = false;
              this.property.modal.showModalOtp = true;
            }, timeout);
          }
        } catch (error) {
          console.error(error);
        }
      }
    },
    async handleRegister() {
      if (
        this.dataForm.register.firstName === "" ||
        this.dataForm.register.lastName === "" ||
        this.dataForm.register.email === ""
      ) {
        return;
      } else {
        this.property.register.isLoading = true;
        const payload = {
          username: this.dataForm.register.firstName,
          fullName: this.dataForm.register.lastName,
          email: this.dataForm.register.email,
          mobilePhoneNumber: "089204731540",
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
              duration: 1500,
              message: resp.data.message,
              type: "is-success",
            });
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
    closeModalAlreadyExist() {
      this.property.alreadyExist.isLoading = true;
      this.property.modal.showModalAlreadyExist = false;
      this.property.alreadyExist.isLoading = false;
    },
    validationRegister() {
      this.property.modal.showModalOtp = false;
      this.dataForm.codeOtp = false;
      this.identifier.isEmail = false;
    },
  },
};

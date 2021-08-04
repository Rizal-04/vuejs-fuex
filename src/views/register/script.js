import Axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      property: {
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
        isEmail: false,
      },
      dataForm: {
        checkingUser: {
          email: "",
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
      if (this.dataForm.checkingUser.email === "") {
        return;
      } else {
        this.property.checkingUser.isLoading = true;
        const headers = { email: this.dataForm.checkingUser.email };
        try {
          const resp = await this.$store.dispatch({
            type: "GET_DATA",
            reqUrl: "checking-avalibility-user",
            headers: headers,
          });
          console.log(resp);
          if (resp.data.message === "SUCCESS") {
            this.dataForm.checkingUser.email = "";
            this.property.checkingUser.isLoading = false;
            this.property.modal.showModalAlreadyExist = true;
          } else {
            this.dataForm.checkingUser.email = "";
            this.property.checkingUser.isLoading = false;
            this.property.modal.showModalOtp = true;
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
              duration: 2000,
              message: `Register sukses`,
              type: "is-success",
            });
          } else {
            this.$buefy.toast.open({
              duration: 2000,
              message: `Register gagal`,
              type: "is-danger",
            });
          }
        } catch (error) {
          console.log(error);
        }
        this.property.register.isLoading = false;
      }
    },
  },
};

export default {
  name: "Register",
  data() {
    return {
      property: {
        modal: {
          showModalOtp: false,
        },
      },
      identifier: {
        isEmail: true,
      },
      dataForm: {
        checkingUser: {
          email: "",
        },
        firstName: "",
        lastName: "",
        email: "",
      },
    };
  },
  methods: {
    routePageLogin() {
      this.$router.push("login");
    },
    async confirm() {
      const headers = { email: this.dataForm.checkingUser.email };
      try {
        const resp = await this.$store.dispatch({
          type: "GET_DATA",
          reqUrl: "checking-avalibility-user",
          headers: headers,
        });
        // .then((resp) => (this.dataForm.checkingUser.email = resp.data.email));
        console.log(resp);
      } catch (error) {
        console.error(error);
      }
    },
  },
};

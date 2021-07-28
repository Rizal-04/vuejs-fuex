export default {
  name: "Login",
  data() {
    return {
      dataForm: {
        email: "",
      },
    };
  },
  methods: {
    routePageRegister() {
      this.$router.push("register");
    },
  },
};

export default {
  name: "Navbar",
  data() {
    return {};
  },
  props: {
    navName: "",
  },
  methods: {
    backHistory() {
      if (
        this.$router.history.current.path === `/order/${this.$route.params.id}`
      ) {
        this.$router.push("/order/history");
        return true;
      }
      window.history.back();
      return false;
    },
  },
};

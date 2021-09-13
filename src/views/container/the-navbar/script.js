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
      window.history.back();
    },
  },
};

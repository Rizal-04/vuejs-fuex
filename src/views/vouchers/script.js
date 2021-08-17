const Navbar = () => import("../container/the-navbar");

export default {
  name: "Vouchers",
  data() {
    return {
      vochers: [],
      isLoading: true,
      isFullPage: true,
    };
  },
  components: { Navbar },
  methods: {
    async getVochers() {
      try {
        const resp = await this.$store.dispatch({
          type: "GET_DATA",
          reqUrl: "key/vocher",
        });
        this.isLoading = false;
        this.vochers = resp.data.content;
      } catch (error) {
        console.log(error);
      }
    },
    copyText(i) {
      var copy = this.vochers[i].code;
      const el = document.createElement("textarea");
      el.value = copy;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      const selected =
        document.getSelection().rangeCount > 0
          ? document.getSelection().getRangeAt(0)
          : false;
      el.select();
      document.execCommand("copy");
      this.$buefy.toast.open({
        duration: 4000,
        message: "Voucher code has been copied",
        position: "is-bottom",
        type: "is-success",
      }); // alert
      document.body.removeChild(el);
      if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
      }
    },
  },
  mounted() {
    this.getVochers();
  },
};

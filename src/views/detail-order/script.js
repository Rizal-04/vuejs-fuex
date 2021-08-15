const Navbar = () => import("../container/the-navbar");

export default {
  name: "DetailOrder",
  data() {
    return {
      select: {
        jenisKendaraan: "",
        jenisBahanbakar: "",
      },
      location: "",
    };
  },
  components: { Navbar },
  methods: {
    locationGet(text, count, insertDots) {
      this.location =
        text.slice(0, count) + (text.length > count && insertDots ? "..." : "");
    },
  },
  created() {
    this.locationGet("Pasar Mangkang, Ngaliyan, Semarang, mkakak", 37, true);
  },
};

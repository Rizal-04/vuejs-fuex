const Navbar = () => import("../container/the-navbar");

export default {
  name: "DetailOrder",
  data() {
    return {
      select: {
        jenisKendaraan: "",
        jenisBahanbakar: "",
      },
      dataForm: {
        fullName: "",
        phoneNumber: "",
        brand: "",
        platNumber: "",
        money: 0,
        vocherCode: "",
      },
      details: {
        payTotal: 0,
        discount: 0,
      },
      liter: 0,
      perLiter: 7_500,
      adminFee: 1_500,
      location: "",
      farAway: false,
    };
  },
  watch: {
    liter: function(v) {
      const aln912 = v * this.perLiter;
      this.dataForm.money = aln912;
      this.details.payTotal = aln912 + this.adminFee - this.details.discount;
    },
  },
  components: { Navbar },
  methods: {
    locationGet(t, y) {
      this.location = t.slice(0, 37) + (t.length > 37 && y ? "..." : "");
    },
  },
  created() {
    this.locationGet("Pasar Mangkang, Ngaliyan, Semarang, Jawa Tengah", true);
  },
};

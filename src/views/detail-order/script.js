const Navbar = () => import("../container/the-navbar");

export default {
  name: "DetailOrder",
  data() {
    return {
      alamat: "",
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
      if (v > 30) {
        alert("Maaf, kami hanya menyediakan 30 Liter bahan bakar saja");
        this.liter = 0;
        return;
      }
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
    handleGetAlamat() {
      var getAlamat = JSON.parse(sessionStorage.getItem("location_selected"));
      this.alamat = getAlamat.addressDetails;
      console.log(getAlamat);
      this.locationGet(this.alamat, true);
    },
  },
  mounted() {
    this.handleGetAlamat();
  },
};

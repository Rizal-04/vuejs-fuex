const Navbar = () => import("../container/the-navbar");

export default {
  name: "DetailOrder",
  data() {
    return {
      alamat: "",
      jenisKendaraan: "",
      jenisBahanbakar: "",
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
      vehicleType: [],
      fuelType: [],
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
    jenisKendaraan: function(p) {
      this.jenisBahanbakar = "";
      this.fuelType = this.vehicleType[p].fuelTypeId;
    },
  },
  components: { Navbar },
  methods: {
    async getVehicleType() {
      try {
        const resp = await this.$store.dispatch({
          type: "GET_DATA",
          reqUrl: "reference/vehicle-type",
        });
        console.log(resp.data.content);
        if (resp.data.message === "SUCCESS") {
          this.vehicleType = resp.data.content;
        } else {
          return;
        }
      } catch (error) {
        console.log(error);
      }
    },
    locationGet(t, y) {
      this.location = t.slice(0, 37) + (t.length > 37 && y ? "..." : "");
    },
    handleGetAlamat() {
      var getAlamat = JSON.parse(sessionStorage.getItem("location_selected"));
      this.alamat = getAlamat.addressDetails + "\t" + getAlamat.selected;
      console.log(getAlamat);
      this.locationGet(this.alamat, true);
    },
    changeLocation(t) {
      this.$router.push(t);
    },
  },
  mounted() {
    this.handleGetAlamat();
    this.getVehicleType();
  },
};

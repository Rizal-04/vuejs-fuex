import Axios from "axios";
const Navbar = () => import("../container/the-navbar");

export default {
  name: "CreateOrder",
  data() {
    return {
      alamat: "",
      alamatLengkap: "",
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
      payTotal: 0,
      discount: 0,
      vehicleType: [],
      fuelType: [],
      liter: 0,
      perLiter: 10_000,
      adminFee: 1_500,
      location: "",
      farAway: false,
      vocherId: 0,
      userId: "",
      isLoading: false,
      isFullPage: true,
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
      this.payTotal = aln912 + this.adminFee;
    },
    jenisKendaraan: function(v) {
      this.jenisBahanbakar = "";
      this.fuelType = this.vehicleType[v].fuelTypeId;
    },
    jenisBahanbakar: function(v) {
      this.liter = 0;
      this.perLiter = 0;
      if (v !== "") {
        this.perLiter = this.fuelType[v].price;
      }
    },
    discount: function(v) {
      const ttl = this.payTotal;
      this.payTotal = ttl - v;
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
      this.alamatLengkap = getAlamat.addressDetails + "\t" + getAlamat.selected;
      this.locationGet(this.alamat, true);
    },
    changeLocation(t) {
      this.$router.push(t);
    },
    getUserID() {
      var getIdentity = JSON.parse(sessionStorage.getItem("User_Data_Login"));
      this.userId = getIdentity.userId;
    },
    async useVocher() {
      if (this.dataForm.vocherCode === "") {
        return;
      }
      this.isLoading = true;
      const res = await Axios({
        url: `https://fuex-service.herokuapp.com/key/vocher/code?code=${this.dataForm.vocherCode}`,
        method: "GET",
      });
      if (res.data.message === "ERROR") {
        this.$buefy.toast.open({
          duration: 4000,
          message: res.data.content,
          type: "is-danger",
        });
        this.vocherId = 0;
        this.payTotal = this.perLiter + this.adminFee;
        this.discount = 0;
      } else {
        if (
          res.data.content.inUseCount < 0 ||
          res.data.content.inUseCount === 0
        ) {
          this.$buefy.toast.open({
            duration: 3000,
            message: "Vocher Sudah Habis Di Gunakan",
            type: "is-danger",
          });
          this.dataForm.vocherCode = "";
          this.isLoading = false;
          return;
        }
        this.$buefy.toast.open({
          duration: 2000,
          message: "Vocher Digunakan",
          type: "is-success",
        });
        this.vocherId = res.data.content.vocherId;
        this.discount = res.data.content.discount;
      }
      this.isLoading = false;
    },
    async buatPesanan() {
      if (window.navigator.onLine === false) {
        this.$buefy.toast.open({
          duration: 3000,
          message: `Tidak ada koneksi Internet`,
          type: "is-danger",
        });
        return;
      }
      if (
        this.dataForm.phoneNumber === "" ||
        this.dataForm.fullName === "" ||
        this.alamatLengkap === "" ||
        this.dataForm.money === 0 ||
        this.dataForm.brand === "" ||
        this.dataForm.platNumber === 0 ||
        this.jenisKendaraan === "" ||
        this.liter === 0 ||
        this.jenisBahanbakar === ""
      ) {
        alert("Form harus di isi semua");
        return;
      }
      if (window.confirm("Buat Pesanan ini?")) {
        this.isLoading = true;
        const vocher1 =
          this.dataForm.vocherCode === "" ? this.vocherId : this.vocherId;
        const buatPesanan = {
          atasNama: this.dataForm.fullName,
          noTelpon: this.dataForm.phoneNumber,
          alamat: this.alamatLengkap,
          merek: this.dataForm.brand,
          numberPlat: this.dataForm.platNumber,
          liter: this.liter,
          vocher: vocher1.toString(),
          users: this.userId.toString(),
          vehicleType: this.vehicleType[
            this.jenisKendaraan
          ].vehicleTypeId.toString(),
          biayaLayanan: this.adminFee,
          fuelType: this.fuelType[this.jenisBahanbakar].fuelTypeId.toString(),
          emergency: this.farAway,
        };
        const res = await Axios({
          url: `https://fuex-service.herokuapp.com/order-detail/`,
          method: "POST",
          data: buatPesanan,
        });
        if (res.data.message === "ERROR") {
          this.$buefy.toast.open({
            duration: 4000,
            message: res.data.content,
            type: "is-danger",
          });
        } else {
          this.$buefy.toast.open({
            duration: 2000,
            message: "Berhasil Melakukan Transaksi",
            type: "is-success",
          });
          setTimeout(() => {
            this.$router.push("/order/" + res.data.content.id);
          }, 2000);
        }
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.handleGetAlamat();
    this.getVehicleType();
    this.getUserID();
  },
};

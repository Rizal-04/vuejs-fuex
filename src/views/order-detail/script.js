import Axios from "axios";

const Navbar = () => import("../container/the-navbar");

export default {
  name: "OrderDetail",
  data() {
    return {
      router: "",
      isComponentModalActive: false,
      isLoading: true,
      isFullPage: true,
      notError: true,
      orderBatal: true,
      dataOrder: [],
      location: "",
      ltr: 0,
      satu: 0,
      billService: 0,
      promo: 0,
      orderStatus: 0,
      orderName: "",
      payTotal: 0,
      dataForm: {
        nama: "",
        notlp: "",
        alamat: "",
        vehicle: "",
        merk: "",
        plat: "",
        bbm: "",
        date: "",
      },
    };
  },
  watch: {
    router: function(v) {
      console.log(v);
    },
  },
  methods: {
    locationGet(t, y) {
      this.location = t.slice(0, 37) + (t.length > 37 && y ? "..." : "");
    },
    async checkVocher(id) {
      const res = await Axios({
        url: `https://fuex-service.herokuapp.com/key/vocher/${id}`,
        method: "GET",
      });
      if (res.data.message === "ERROR") {
        this.$buefy.toast.open({
          duration: 4000,
          message: res.data.content,
          type: "is-danger",
        });
        return 0;
      } else {
        return res.data.content.discount;
      }
    },
    async getRouter() {
      const res = await Axios({
        url:
          `https://fuex-service.herokuapp.com/order-detail/` +
          this.$route.params.id,
        method: "GET",
      });
      if (res.data.message === "ERROR") {
        this.$buefy.toast.open({
          duration: 4000,
          message: res.data.content,
          type: "is-danger",
        });
        this.notError = false;
      } else {
        this.dataOrder = res.data.content;
        this.dataForm.nama = this.dataOrder.atasNama;
        this.dataForm.notlp = this.dataOrder.noTelpon;
        this.dataForm.alamat = this.dataOrder.alamat;
        this.dataForm.vehicle = this.dataOrder.vehicleTypeId.tipeKendaraan;
        this.dataForm.merk = this.dataOrder.merek;
        this.dataForm.plat = this.dataOrder.numberPlat;
        this.dataForm.bbm = this.dataOrder.fuelTypeId.tipeBensin;
        this.dataForm.date = this.dataOrder.createDate;
        this.satu = this.dataOrder.fuelTypeId.price;
        this.ltr = this.dataOrder.liter;
        this.billService = parseInt(this.dataOrder.biayaLayanan);
        const vcrId = this.dataOrder.vocher;
        this.promo = vcrId === null ? 0 : await this.checkVocher(vcrId);
        this.payTotal = this.dataOrder.totalPembayaran;
        this.locationGet(this.dataForm.alamat, true);
        this.orderStatus = this.dataOrder.orderStatusId.orderStatusId;
        this.orderName = this.dataOrder.orderStatusId.orderStatusName;
        if (this.dataOrder.orderStatusId.orderStatusId !== 1) {
          this.orderBatal = false;
        }
      }
      this.isLoading = false;
    },
    async batalkanPesanan() {
      if (window.confirm("Batalkan Pesanan Ini?")) {
        this.isLoading = true;
        const res = await Axios({
          url: `https://fuex-service.herokuapp.com/order-detail/status-cancle/${this.dataOrder.id}`,
          method: "PATCH",
        });
        if (res.data.message === "ERROR") {
          this.$buefy.toast.open({
            duration: 4000,
            message: res.data.content,
            type: "is-danger",
          });
        }
        this.isLoading = false;
      }
    },
  },
  computed: {
    date() {
      const date = new Date(this.dataForm.date);
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? "0" + minutes : minutes;
      let strTime =
        hours +
        ":" +
        minutes +
        " " +
        ampm +
        "\t\t" +
        ("0" + date.getDate()).slice(-2) +
        "-" +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        "-" +
        date.getFullYear();
      return strTime;
    },
  },
  mounted() {
    this.getRouter();
  },
  components: { Navbar },
};

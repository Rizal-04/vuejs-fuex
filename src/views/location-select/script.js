const Navbar = () => import("../container/the-navbar");

export default {
  name: "LocationSelect",
  components: { Navbar },
  data() {
    return {
      property: {
        isLoading: false,
      },
      dataForm: {
        selected: "",
        addressDetails: "",
      },
      locationSelect: [],
    };
  },
  methods: {
    async handleGetLocationSelectOrder() {
      this.property.isLoading = true;
      try {
        const resp = await this.$store.dispatch({
          type: "GET_DATA",
          reqUrl: "order-detail/location-order/",
        });
        console.log(resp);
        if (resp.data.message === "SUCCESS") {
          this.locationSelect = resp.data.content;
        } else {
          return;
        }
      } catch (error) {
        console.log(error);
      }
    },
    handleConfirm() {
      if (this.dataForm.selected === "") {
        alert("Silahkan Pilih Kecamatan Terlebih Dahulu");
        return;
      }
      if (this.dataForm.addressDetails === "") {
        alert("Silahkan Isi Detail Alamat Terlebih Dahulu");
        return;
      }
      const locationSelect = {
        selected: this.dataForm.selected,
        addressDetails: this.dataForm.addressDetails,
      };
      var convertToString = JSON.stringify(locationSelect);
      this.$router.push("/order/create-order");
      sessionStorage.setItem("location_selected", convertToString);
    },
  },
  mounted() {
    this.handleGetLocationSelectOrder();
  },
};

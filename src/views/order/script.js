import Axios from "axios";

const Navbar = () => import("../container/the-navbar");
const BottomNavigation = () => import("../container/the-bottomNavigation");

export default {
  name: "Order",
  components: { Navbar, BottomNavigation },
  data() {
    return {
      riwayatPesanan: [],
      isFullPage: true,
      isLoading: false,
      isEmpty: false,
      identity: {
        userId: "",
      },
    };
  },
  methods: {
    getIdentityFromSesion() {
      var getIdentity = JSON.parse(sessionStorage.getItem("User_Data_Login"));
      this.identity.userId = getIdentity.userId;
    },
    async handleGetDetailOrderUser() {
      this.isLoading = true;
      const params = {
        id: this.identity.userId,
      };
      const url =
        "https://fuex-service.herokuapp.com/order-detail/user/" +
        `${this.identity.userId}`;
      try {
        const resp = await Axios({
          url: url,
          method: "GET",
          params: params,
        });
        console.log(resp);
        if (resp.data.message === "SUCCESS") {
          this.riwayatPesanan = resp.data.content;
        } else {
          this.isEmpty = true;
        }
      } catch (error) {
        console.log(error);
      }
      this.isLoading = false;
    },
  },
  mounted() {
    this.getIdentityFromSesion();
    this.handleGetDetailOrderUser();
  },
};

const Navbar = () => import("../container/the-navbar");
const BottomNavigation = () => import("../container/the-bottomNavigation");

export default {
  name: "Akun",
  components: { Navbar, BottomNavigation },
  data() {
    return {
      identity: {
        username: "",
        email: "",
      },
    };
  },
  methods: {
    handleGetIdentity() {
      var getIdentity = JSON.parse(sessionStorage.getItem("User_Data_Login"));
      this.identity.username = getIdentity.fullName;
      this.identity.email = getIdentity.email;
    },
    handleLogout() {
      sessionStorage.clear();
      window.location.reload();
    },
    routeToInstagram() {
      window.open(`https://www.instagram.com/rizal04_xfriends/`);
    },
    routeToFacebook() {
      window.open(`https://web.facebook.com/rizal.parmi.3/`);
    },
  },
  mounted() {
    this.handleGetIdentity();
  },
};

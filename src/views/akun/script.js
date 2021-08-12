const Navbar = () => import("../container/the-navbar");

export default {
  name: "Akun",
  components: { Navbar },
  methods: {
    routeToInstagram() {
      window.open(`https://www.instagram.com/rizal04_xfriends/`);
    },
    routeToFacebook() {
      window.open(`https://web.facebook.com/rizal.parmi.3/`);
    },
  },
};

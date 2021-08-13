import Vue from "vue";
import Router from "vue-router";
const Container = () => import("@/views/container/the-container");
const Login = () => import("@/views/login");
const Register = () => import("@/views/register");
const Home = () => import("@/views/home");
const Order = () => import("@/views/order");
const Help = () => import("@/views/help");
const Akun = () => import("@/views/akun");
const LocationSelect = () => import("@/views/location-select");
const Vouchers = () => import("@/views/vouchers");
const ForgotPassword = () => import("@/views/forgot-password");

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: configRoutes(),
  scrollBehavior: () => ({ y: 0 }),
});

const ifNotAuthenticated = (to, from, next) => {
  const getUserDataFromSession = JSON.parse(
    sessionStorage.getItem("user_data")
  );
  if (!getUserDataFromSession) {
    next();
    return;
  }
  if (
    to.query !== null &&
    to.query !== undefined &&
    to.query.ref !== null &&
    to.query.ref !== undefined
  ) {
    return next(to.query.ref);
  }
  next("/");
};

const ifAuthenticated = async (to, from, next) => {
  const getUserDataFromSession = JSON.parse(
    sessionStorage.getItem("user_data")
  );
  if (getUserDataFromSession) {
    return next();
  } else {
    next("/pages/login");
  }
};

function configRoutes() {
  return [
    {
      path: "/",
      redirect: "/home",
      name: "",
      component: Container,
      children: [
        {
          path: "home",
          name: "Home",
          beforeEnter: ifAuthenticated,
          component: Home,
        },
        {
          path: "order",
          component: {
            render(c) {
              return c("router-view");
            },
          },
          children: [
            {
              path: "history",
              name: "Order",
              beforeEnter: ifAuthenticated,
              component: Order,
            },
          ],
        },
        {
          path: "help",
          name: "Help",
          beforeEnter: ifAuthenticated,
          component: Help,
        },
        {
          path: "akun",
          name: "Akun",
          beforeEnter: ifAuthenticated,
          component: Akun,
        },
        {
          path: "/pages",
          name: "pages",
          component: {
            render(c) {
              return c("router-view");
            },
          },
          children: [
            {
              path: "login",
              name: "Login",
              beforeEnter: ifNotAuthenticated,
              component: Login,
            },

            {
              path: "register",
              name: "Register",
              beforeEnter: ifNotAuthenticated,
              component: Register,
            },
          ],
        },
        {
          path: "pilih-lokasi",
          name: "LocationSelect",
          beforeEnter: ifAuthenticated,
          component: LocationSelect,
        },
        {
          path: "vouchers",
          name: "Vouchers",
          beforeEnter: ifAuthenticated,
          component: Vouchers,
        },
        {
          path: "forgot-password",
          name: "ForfotPassword",
          beforeEnter: ifNotAuthenticated,
          component: ForgotPassword,
        },
      ],
    },
  ];
}

export default router;

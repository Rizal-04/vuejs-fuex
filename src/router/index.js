import Vue from "vue";
import Router from "vue-router";
const Container = () => import("@/views/container/the-container");
const Login = () => import("@/views/login");
const Register = () => import("@/views/register");
const Home = () => import("@/views/home");
const Order = () => import("@/views/order");
const Help = () => import("@/views/help");
const Akun = () => import("@/views/akun");

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
    next("/login");
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
  ];
}

export default router;

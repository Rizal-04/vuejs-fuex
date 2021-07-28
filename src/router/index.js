import Vue from "vue";
import Router from "vue-router";
const Container = () => import("@/views/container");
const Login = () => import("@/views/login");
const Register = () => import("@/views/register");

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: configRoutes(),
  scrollBehavior: () => ({ y: 0 }),
});

function configRoutes() {
  return [
    {
      path: "/",
      redirect: "/login",
      name: "",
      component: Container,
      children: [
        {
          path: "login",
          name: "Login",
          component: Login,
        },
        {
          path: "register",
          name: "Register",
          component: Register,
        },
      ],
    },
  ];
}

export default router;

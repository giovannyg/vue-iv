import { createRouter, createWebHistory } from "vue-router";
import SelectorView from "../views/SelectorView.vue";
import LoginView from "../views/auth/LoginView.vue";
import SignUpView from "../views/auth/SignUpView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: SelectorView,
    },
    {
      path: "/auth",
      name: "auth",
      children: [
        {
          path: "login",
          name: "login",
          component: LoginView,
        },
        {
          path: "signup",
          name: "singup",
          component: SignUpView,
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;

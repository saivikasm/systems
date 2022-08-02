import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: () => import("@/view/github/UsersList.vue"),
  },
  {
    path: "/:username",
    component: () => import("@/view/github/UserDetails.vue"),
  },
];
export default new Router({ routes: routes });

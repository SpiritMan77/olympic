import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Program from "@/views/Program";
import Results from "@/views/Results";
import FollowList from "@/views/FollowList";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/program",
    name: "program",
    component: Program,
  },
  {
    path: "/results",
    name: "results",
    component: Results,
  },
  {
    path: "/follow_list",
    name: "followlist",
    component: FollowList,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //
  //   component: () =>
  //     import("../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

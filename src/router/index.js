import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Program from "@/views/Program";
import Results from "@/views/Results";
import FollowList from "@/views/FollowList";
import PageNotFound from "@/views/PageNotFound";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "pagenotfound",
    component: PageNotFound,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/program/:sport",
    name: "program",
    component: Program,
    props: true,
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

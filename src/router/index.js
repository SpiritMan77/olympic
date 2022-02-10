import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Program from "@/views/Program";
import FollowList from "@/views/FollowList";
import PageNotFound from "@/views/PageNotFound";
import CreateTeam from "@/views/CreateTeam";
import CreateMatch from "@/views/CreateMatch";

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
    path: "/follow_list",
    name: "followlist",
    component: FollowList,
  },
  {
    path: "/create_team/:sport",
    name: "createteam",
    component: CreateTeam,
    props: true,
  },
  {
    path: "/create_match/:sport",
    name: "creatematch",
    component: CreateMatch,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

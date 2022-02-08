import Vue from "vue";
import Vuex from "vuex";
import { sports, matches } from "../data/olympics";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: sports,
    matches: matches,
    followList: [],
  },
  mutations: {},
  getters: {
    getData: (state) => state.data,
    getMatches: (state) => state.matches,
    getFollowList: (state) => state.followList,
  },
  modules: {},
});

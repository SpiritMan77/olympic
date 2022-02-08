import Vue from "vue";
import Vuex from "vuex";
import { matches, sports } from "../data/olympics";

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
    getTeams: (state) => (sport, team) =>
      state.data[sport].filter((t) => {
        return team ? team === t.team : true;
      }),
    getFollowList: (state) => state.followList,
  },
  modules: {},
});

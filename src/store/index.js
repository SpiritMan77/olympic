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
  mutations: {
    ADD_TEAM: (state, data) => {
      state.data[data.sport].push(data.newTeam);
    },
    ADD_FOLLOW: (state, category) => {
      if (state.followList.indexOf(category) === -1) {
        state.followList.push(category);
      }
    },
    REMOVE_FOLLOW: (state, category) => {
      state.followList = state.followList.filter((a) => a !== category);
    },
  },
  getters: {
    getData: (state) => state.data,
    getMatches: (state) => (sport) =>
      state.matches[sport].map((match) => {
        match.date = new Date(match.date);
        return match;
      }),
    getTeams: (state) => (sport, team) =>
      state.data[sport].filter((t) => {
        return team ? team === t.team : true;
      }),
    getFollowList: (state) => state.followList,
  },
  modules: {},
});

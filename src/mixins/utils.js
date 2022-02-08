export default {
  methods: {
    getTeamState(sport, team) {
      return this.$store.getters.getTeams(sport, team)[0]?.state;
    },
    ucfirst: (str) => str.substr(0, 1).toUpperCase() + str.substr(1),
  },
};

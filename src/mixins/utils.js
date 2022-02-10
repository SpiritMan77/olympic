import countries from "@/data/countries";

export default {
  methods: {
    getTeamState(sport, team) {
      return this.$store.getters.getTeams(sport, team)[0]?.state;
    },
    getStateName(code) {
      return countries.find((a) => a.code === code)?.name;
    },
  },
};

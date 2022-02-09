<template>
  <v-data-table :headers="tableHeaders" :items="tableItems" hide-default-footer>
  </v-data-table>
</template>

<script>
import utils from "@/mixins/utils";

export default {
  name: "Matches",
  props: {
    sport: String,
    data: Array,
    resultsMode: Boolean,
  },
  mixins: [utils],
  computed: {
    tableHeaders() {
      let headers = [
        {
          text: "Date and Time",
          sortable: true,
          sort: (a, b) => {
            return new Date(b).getTime() - new Date(a).getTime();
          },
          value: "date",
        },
        {
          text: "State",
          sortable: true,
          value: "state",
        },
        {
          text: "Team",
          sortable: true,
          value: "team",
        },
      ];
      if (this.resultsMode) {
        headers.push({
          text: "Score",
          sortable: true,
          value: "score",
        });
      }
      return headers;
    },
    tableItems() {
      return this.data.map((data) => {
        return {
          date: data.date.toLocaleDateString("sk-SK", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          }),
          state:
            this.getTeamState(this.sport, data.team1) +
            " VS " +
            this.getTeamState(this.sport, data.team2),
          team: `${data.team1} VS ${data.team2}`,
          score: `${data.score1}:${data.score2}`,
        };
      });
    },
  },
};
</script>

<style scoped></style>

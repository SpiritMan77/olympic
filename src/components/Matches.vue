<template>
  <v-data-table :headers="tableHeaders" :items="tableItems" hide-default-footer>
    <template v-slot:item.team="{ item }">
      <div :class="`famfamfam-flags ${item.team.team1.code.toLowerCase()}`" />
      <strong>{{ item.team.team1.name }}</strong> VS
      <strong>{{ item.team.team2.name }}</strong>
      <div :class="`famfamfam-flags ${item.team.team2.code.toLowerCase()}`" />
    </template>
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
          text: "Team",
          sortable: false,
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
          team: {
            team1: {
              name: data.team1,
              code: this.getTeamState(this.sport, data.team1),
            },
            team2: {
              name: data.team2,
              code: this.getTeamState(this.sport, data.team2),
            },
          },
          score: `${data.score1}:${data.score2}`,
        };
      });
    },
  },
};
</script>

<style scoped></style>

<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Date and Time</th>
          <th class="text-left">State</th>
          <th class="text-left">Teams</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="match in matches" :key="match.team1">
          <td>
            <b>{{ match.date }} {{ match.time }}</b>
          </td>
          <td>
            <b>{{ getTeamState(sport, match.team1) }}</b> VS
            <b>{{ getTeamState(sport, match.team2) }}</b>
          </td>
          <td>
            <b>{{ match.team1 }}</b> VS <b>{{ match.team2 }}</b>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import utils from "@/mixins/utils";

export default {
  name: "Matches",
  props: ["sport", "matches"],
  mixins: [utils],
};
</script>

<style scoped></style>

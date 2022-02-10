<template>
  <v-data-table :headers="tableHeaders" :items="tableItems" hide-default-footer>
    <template v-slot:item.stateFlag="{ item }">
      <div class="d-flex justify-center">
        <div :class="`famfamfam-flags ${item.stateFlag.toLowerCase()}`" />
      </div>
    </template>
  </v-data-table>
</template>

<script>
import utils from "@/mixins/utils";

export default {
  name: "Teams",
  mixins: [utils],
  props: ["teams"],
  computed: {
    tableHeaders() {
      return [
        {
          text: "Team Name",
          sortable: true,
          value: "name",
        },
        {
          text: "State",
          sortable: true,
          value: "state",
        },
        {
          text: "State Flag",
          sortable: true,
          value: "stateFlag",
          align: "center",
        },
      ];
    },
    tableItems() {
      return this.teams.map((team) => {
        return {
          name: team.team,
          state: this.getStateName(team.state),
          stateFlag: team.state,
        };
      });
    },
  },
};
</script>

<style scoped></style>

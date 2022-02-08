<template>
  <v-data-table :headers="tableHeaders" :items="tableItems" hide-default-footer>
    <template v-slot:item.stateFlag="{ item }">
      <v-img
        max-width="50"
        max-height="50"
        :src="require(`../assets/images/${item.state}.jpg`)"
      />
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "Teams",
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
        },
      ];
    },
    tableItems() {
      return this.teams.map((team) => {
        return {
          name: team.team,
          state: team.state,
          stateFlag: team.state,
        };
      });
    },
  },
};
</script>

<style scoped></style>

<template>
  <div class="addTeam">
    <h1>Add Team</h1>
    <v-form ref="form" v-model="valid">
      <v-text-field
        v-model="newTeam.team"
        :rules="teamRules"
        label="Team Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="newTeam.state"
        :rules="stateRules"
        label="State"
        required
      ></v-text-field>

      <v-btn color="success" class="mr-4" @click="addTeam"> Add Team</v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "CreateTeamDialog",
  props: ["sport"],
  data() {
    return {
      valid: true,
      teamRules: [(v) => !!v || "Team is required"],
      stateRules: [(v) => !!v || "State is required"],
      newTeam: {
        sport: this.sport,
        team: "",
        state: "",
      },
    };
  },
  methods: {
    ...mapMutations(["ADD_TEAM"]),
    addTeam() {
      if (this.$refs.form.validate()) {
        this.ADD_TEAM({ sport: this.sport, newTeam: this.newTeam });
        this.$router.go(-1);
      }
    },
  },
};
</script>

<style scoped>
.addTeam {
  margin-left: 10px;
}
</style>

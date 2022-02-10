<template>
  <div class="addTeam">
    <h2>Add Match</h2>
    <v-form ref="form" v-model="valid">
      <v-row>
        <v-col cols="11" sm="5">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :rules="dateRule"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Date picker"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" :min="new Date().toISOString()">
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="11" sm="5">
          <v-menu
            ref="menu"
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="time"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="time"
                label="Time picker"
                prepend-icon="mdi-clock-time-four-outline"
                readonly
                v-bind="attrs"
                v-on="on"
                :rules="timeRule"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="menu2"
              v-model="time"
              full-width
              @click:minute="$refs.menu.save(time)"
            ></v-time-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex" cols="12" sm="6">
          <v-select
            :rules="team1Rule"
            :items="team1Items"
            :item-text="(item) => item.team"
            :item-value="(item) => item.team"
            label="Team1"
            v-model="newMatch.team1"
          >
          </v-select>
        </v-col>
        <v-col class="d-flex" cols="12" sm="6">
          <v-select
            :rules="team2Rule"
            :items="team2Items"
            :item-text="(item) => item.team"
            :item-value="(item) => item.team"
            label="Team2"
            v-model="newMatch.team2"
          ></v-select>
        </v-col>
      </v-row>

      <v-btn ref="save" color="success" class="mr-4" @click="addTeam"
        >Add Match</v-btn
      >
    </v-form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "CreateTeamDialog",
  props: ["sport", "rightTeams"],
  data() {
    return {
      date: `${new Date().getFullYear()}-${
        (new Date().getMonth() + 1 < 10 ? "0" : "") +
        (new Date().getMonth() + 1)
      }-${(new Date().getDate() < 10 ? "0" : "") + new Date().getDate()}`,
      time: `${new Date().getHours()}:${new Date().getMinutes()}`,
      menu: false,
      menu2: false,
      valid: true,
      dateRule: [(v) => !!v || "Date is required"],
      timeRule: [(v) => !!v || "Time is required"],
      team1Rule: [(v) => !!v || "Team1 is required"],
      team2Rule: [(v) => !!v || "Team2 is required"],
      newMatch: {
        date: "",
        team1: "",
        team2: "",
      },
      team1Items: [],
      team2Items: [],
    };
  },
  methods: {
    ...mapMutations(["ADD_MATCH"]),
    addTeam() {
      this.combineDateAndTime();

      if (this.$refs.form.validate()) {
        this.ADD_MATCH({ sport: this.sport, newMatch: this.newMatch });
        this.$router.go(-1);
      }
    },
    combineDateAndTime() {
      this.newMatch.date = new Date(`${this.date} ${this.time}`);
    },
  },
  created() {
    this.team1Items = this.rightTeams;
    this.team2Items = this.rightTeams;
  },
  mounted() {
    this.combineDateAndTime();
  },
  watch: {
    date() {
      this.combineDateAndTime();
    },
    time() {
      this.combineDateAndTime();
    },
    "newMatch.team1"(selectedTeam) {
      this.team2Items = this.rightTeams.filter(
        (team) => team.team !== selectedTeam
      );
    },
    "newMatch.team2"(selectedTeam) {
      this.team1Items = this.rightTeams.filter(
        (team) => team.team !== selectedTeam
      );
    },
  },
};
</script>

<style scoped>
.addTeam {
  margin-left: 10px;
}
</style>

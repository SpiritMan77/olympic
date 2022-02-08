<template>
  <div class="program">
    <v-tabs fixed-tabs background-color="primary" dark>
      <v-tab>Teams</v-tab>
      <v-tab>Matches</v-tab>
      <v-tab>Results</v-tab>

      <v-tab-item>
        <v-card>
          <v-container>
            <v-row style="padding-top: 10px">
              <h1>Teams</h1>
              <v-spacer></v-spacer>
              <v-menu offset-y :close-on-content-click="false">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="mx-2"
                    fab
                    dark
                    small
                    color="primary"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon dark flat> mdi-filter</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <h3>By State</h3>
                  <v-list-item v-for="state in states" :key="state">
                    <v-checkbox
                      v-model="stateFilter"
                      :label="state"
                      :value="state"
                    ></v-checkbox>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-row>
          </v-container>

          <Teams :teams="rightTeams"></Teams>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card>
          <v-container>
            <v-row style="padding-top: 10px">
              <h1>Matches</h1>
              <v-spacer></v-spacer>
              <v-menu offset-y :close-on-content-click="false">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="mx-2"
                    fab
                    dark
                    small
                    color="primary"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon dark flat> mdi-filter</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <h3>By State</h3>
                  <v-list-item v-for="state in states" :key="state">
                    <v-checkbox
                      v-model="stateFilter"
                      :label="state"
                      :value="state"
                    ></v-checkbox>
                  </v-list-item>
                </v-list>
                <v-list>
                  <h3>By Date</h3>
                  <v-list-item>
                    <v-list-item-title></v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-row>
          </v-container>
          <Matches :sport="sport" :matches="rightMatches"></Matches>
        </v-card>
      </v-tab-item>

      <v-tab-item><h1>Results</h1></v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Teams from "@/components/Teams";
import Matches from "@/components/Matches";
import utils from "@/mixins/utils";

export default {
  name: "Program",
  props: ["sport"],
  components: { Teams, Matches },
  mixins: [utils],
  data() {
    return {
      stateFilter: [],
    };
  },
  computed: {
    ...mapGetters(["getData", "getMatches"]),
    rightTeams() {
      return this.getData[this.sport].filter((a) => {
        if (this.stateFilter.length === 0) return true;
        else if (this.stateFilter.indexOf(a.state) >= 0) return true;
        return false;
      });
    },
    rightMatches() {
      let m = this.getMatches[this.sport];
      return m.filter((a) => {
        let state1 = this.getTeamState(this.sport, a.team1);
        let state2 = this.getTeamState(this.sport, a.team2);

        console.log({ sf: this.stateFilter, a });

        if (this.stateFilter.length === 0) return true;
        else if (
          this.stateFilter.indexOf(state1) >= 0 ||
          this.stateFilter.indexOf(state2) >= 0
        )
          return true;

        return false;
      });
    },
    states() {
      return new Set(this.getData[this.sport].map((a) => a.state));
    },
  },
  methods: {
    filterSport(obj) {
      return obj.sport === this.sport;
    },
  },
};
</script>

<style scoped></style>

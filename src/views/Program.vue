<template>
  <div class="program">
    <v-tabs
      fixed-tabs
      background-color="primary"
      dark
      @change="activeTab = $event"
    >
      <!-------------------- ALL TABS -------------------->
      <v-tab>Teams</v-tab>
      <v-tab>Matches</v-tab>
      <v-tab>Results</v-tab>
      <!-------------------- TEAM TAB -------------------->
      <v-tab-item>
        <v-card>
          <v-container>
            <v-row style="padding-top: 10px">
              <h2>Teams</h2>
              <v-spacer></v-spacer>
              <v-btn
                fab
                dark
                small
                color="primary"
                router
                :to="{ name: 'createteam', params: { sport: sport } }"
              >
                <v-icon dark flat> mdi-plus</v-icon>
              </v-btn>
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
                      :label="getStateName(state)"
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
      <!-------------------- MATCHES TAB -------------------->
      <v-tab-item>
        <v-card>
          <v-container>
            <v-row style="padding-top: 10px">
              <h2>Matches</h2>
              <v-spacer></v-spacer>
              <v-btn
                fab
                dark
                small
                color="primary"
                router
                :to="{
                  name: 'creatematch',
                  params: { sport: sport, rightTeams: rightTeams },
                }"
              >
                <v-icon dark flat> mdi-plus</v-icon>
              </v-btn>
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
                      :label="getStateName(state)"
                      :value="state"
                    ></v-checkbox>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-row>
          </v-container>
          <Matches :sport="sport" :data="rightMatches"></Matches>
        </v-card>
      </v-tab-item>
      <!-------------------- RESULTS TAB -------------------->
      <v-tab-item>
        <v-card>
          <v-container>
            <v-row style="padding-top: 10px">
              <h2>Results</h2>
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
                      :label="getStateName(state)"
                      :value="state"
                    ></v-checkbox>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-row>
          </v-container>

          <Matches :sport="sport" :data="rightResults" :resultsMode="true" />
        </v-card>
      </v-tab-item>
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
      activeTab: 0,
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
      return this.getMatches(this.sport).filter((a) => {
        if (this.stateFilter.length === 0) return true;
        else if (
          this.stateFilter.indexOf(this.getTeamState(this.sport, a.team1)) >=
            0 ||
          this.stateFilter.indexOf(this.getTeamState(this.sport, a.team2)) >= 0
        )
          return true;
        return false;
      });
    },
    rightResults() {
      return this.rightMatches.filter((a) => a.date < new Date());
    },
    states() {
      return new Set(this.getData[this.sport].map((a) => a.state));
    },
  },
};
</script>

<style scoped></style>

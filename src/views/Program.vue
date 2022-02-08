<template>
  <div class="program">
    <v-tabs fixed-tabs background-color="primary" dark>
      <v-tab> Teams</v-tab>
      <v-tab> Matches</v-tab>

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

          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">State</th>
                  <th class="text-left">Flag</th>
                  <th class="text-left">Team</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="data in rightTeams" :key="data.team">
                  <td>{{ data.state }}</td>
                  <td>
                    <v-img
                      max-height="50"
                      max-width="50"
                      :src="require(`../assets/images/${data.state}.jpg`)"
                    ></v-img>
                  </td>
                  <td>{{ data.team }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card>
          <v-container>
            <v-row style="padding-top: 10px">
              <h1>Matches</h1>
              <v-spacer></v-spacer>
              <v-menu offset-y>
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
                  <v-list-item v-for="state in rightMatches" :key="state">
                    <v-checkbox
                      v-model="stateFilter"
                      :label="state.state"
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
                <tr v-for="match in rightMatches" :key="match.state1">
                  <td>
                    <b>{{ match.date }} {{ match.time }}</b>
                  </td>
                  <td>
                    <b>{{ match.state1 }}</b> VS <b>{{ match.state2 }}</b>
                  </td>
                  <td>
                    <b>{{ match.team1 }}</b> VS <b>{{ match.team2 }}</b>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Program",
  props: ["sport"],
  data() {
    return {
      stateFilter: [],
    };
  },
  computed: {
    ...mapGetters(["getData", "getMatches", "getStates"]),
    rightSport() {
      return this.getData[this.sport];
    },
    rightTeams() {
      return this.rightSport.filter((a) => {
        if (this.stateFilter.length === 0) return true;
        else if (this.stateFilter.indexOf(a.state) >= 0) return true;
        return false;
      });
    },
    rightMatches() {
      return this.getMatches[this.sport];
    },
    states() {
      return new Set(this.rightSport.map((a) => a.state));
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

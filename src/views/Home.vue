<template>
  <div class="home">
    <v-container fluid>
      <v-row align="center">
        <v-col v-for="sport in uniqueSports" :key="sport.index" class="col-4">
          <v-card
            class="mx-auto my-12"
            max-width="600"
            router
            :to="{ name: 'program', params: { sport: sport } }"
          >
            <v-img
              height="700"
              :src="require(`../assets/images/${sport}.jpg`)"
            ></v-img>

            <v-card-title>{{ sport.toUpperCase() }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {},
  computed: {
    ...mapGetters(["getData"]),
    uniqueSports() {
      return Object.keys(this.getData);
    },
  },
  methods: {},
  filters: {},
};
</script>

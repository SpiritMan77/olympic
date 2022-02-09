<template>
  <div class="home">
    <v-container fluid>
      <v-row align="center">
        <v-col v-for="sport in uniqueSports" :key="sport.index" class="col-4">
          <v-card
            v-if="!followListMode || checkFollowList(sport)"
            class="mx-auto my-12"
            max-width="600"
            router
            :to="{ name: 'program', params: { sport: sport } }"
          >
            <v-img
              height="600"
              :src="require(`../assets/images/${sport}.jpg`)"
            ></v-img>

            <v-card-title>{{ sport.toUpperCase() }}</v-card-title>
            <v-card-actions>
              <v-btn
                v-if="!followListMode"
                fab
                dark
                small
                color="primary"
                @click.prevent="addFollow(sport)"
              >
                <v-icon dark flat> mdi-heart</v-icon>
              </v-btn>
              <v-btn
                v-else
                fab
                dark
                small
                color="primary"
                @click.prevent="removeFollow(sport)"
              >
                <v-icon dark flat> mdi-close</v-icon>
              </v-btn></v-card-actions
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Home",
  components: {},
  props: ["followListMode"],
  computed: {
    ...mapGetters(["getData", "getFollowList"]),
    uniqueSports() {
      return !this.followListMode
        ? Object.keys(this.getData)
        : this.getFollowList;
    },
  },
  methods: {
    ...mapMutations(["ADD_FOLLOW", "REMOVE_FOLLOW"]),
    addFollow(category) {
      this.ADD_FOLLOW(category);
    },
    removeFollow(category) {
      this.REMOVE_FOLLOW(category);
    },
    checkFollowList(sport) {
      return this.getFollowList.indexOf(sport) !== -1;
    },
  },
  filters: {},
  mounted() {
    console.log(this.getFollowList);
  },
};
</script>

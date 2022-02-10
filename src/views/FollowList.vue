<template>
  <div>
    <h2 v-if="getFollowList.length === 0">
      You are not following any sports at the moment
    </h2>
    <Home :followListMode="true" />
  </div>
</template>

<script>
import Home from "@/views/Home";
import { mapGetters } from "vuex";

export default {
  name: "FollowList",
  components: { Home },
  computed: { ...mapGetters(["getFollowList"]) },
};
</script>

<style scoped></style>

<template>
  <div class="follow-list">
    <h1 v-if="getFollowList.length === 0">You are not following any sports</h1>
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

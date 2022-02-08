<template>
  <v-app-bar app color="primary" dark>
    <router-link class="routerlink" to="/" color="white" text-color="white">
      <h1>Olympic</h1>
    </router-link>
    <v-spacer></v-spacer>
    <v-btn
      v-for="link in links"
      :key="link.text"
      router
      :to="link.route"
      color="white"
      text
      rounded
      class="my-2"
    >
      {{ link.text }}
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    links: [
      { text: "Home", route: "/" },
      { text: "Results", route: "/results" },
      { text: "Follow list", route: "/follow_list" },
    ],
  }),
};
</script>
<style lang="scss" scoped>
.routerlink {
  color: white;
  text-decoration: none;
}
</style>

<template>
  <v-app>
    <navbar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import navbar from "./components/NavBar.vue";

export default {
  name: "App",
  components: { navbar },
  data: () => ({}),
};
</script>
<style lang="scss">
.app {
  background-color: red;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 1.2rem;
}
</style>

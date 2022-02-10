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
@import "~famfamfam-flags/dist/sprite/famfamfam-flags.css";

h2,
h3,
h4,
h5,
h6 {
  margin: 0 1.2rem;
}

.famfamfam-flags {
  display: inline-block;
  margin: 0 0.5rem;
}
</style>

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
<style lang="scss" scoped>
.app {
  background-color: red;
}
</style>

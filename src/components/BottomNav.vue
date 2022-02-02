<template>
  <v-footer
      app
      color="primary"
  >
    <v-row
        justify="center"
        no-gutters
    >
      <v-col
          class="primary py-4 text-center white--text"
          cols="12"
      >
        © {{ new Date().getFullYear() }} — <strong>Adam Feščák</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
/* eslint-disable */
export default {
  name: "BottomNav",

};
</script>

<style scoped>

</style>
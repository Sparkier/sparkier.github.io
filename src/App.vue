<template>
  <v-app>
    <v-content>
      <Head/>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Head from './components/Head.vue';

export default {
  name: 'App',

  components: {
    Head,
  },

  data: () => ({
  }),
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<template>
  <v-app>
    <Head/>
    <v-content id="main" :style="headHeight">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import {mapState} from 'vuex';
import Head from './components/Head.vue';

export default {
  name: 'App',

  components: {
    Head,
  },
  computed: mapState({
    headHeight: (state) => 'margin-top: ' + state.headHeight +'px',
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

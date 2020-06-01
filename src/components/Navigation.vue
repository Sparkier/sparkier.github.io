<template>
  <v-row align="center" justify="center">
    <v-col align="right">
      <router-link to="/research">Research</router-link>
    </v-col>
    <v-col cols="3">
      <router-link to="/">
        <v-avatar size="100%" max-width="150" min-width="0%" >
          <img
            src="@/assets/alex_small.jpg"
            alt="Profile image Alex Bäuerle"
            ref="pic"/>
        </v-avatar>
      </router-link>
    </v-col>
    <v-col align="left">
      <router-link to="/fun">Projects</router-link>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Navigation',

  methods: {
    getPicHeight() {
      const windowShare = window.innerWidth/12 * 3;
      const picHeight = Math.min(150, windowShare);
      this.$store.commit('setHeadHeight', (picHeight + 59));
    },
  },
  created() {
    window.addEventListener('resize', this.getPicHeight);
    this.getPicHeight();
  },
};
</script>

<style lang="scss">
a {
  font-size: 16pt;
  color: #2c3e50 !important;

  &.router-link-exact-active {
    color: rgb(67, 151, 236) !important;
  }
}
</style>

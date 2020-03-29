<template>
  <v-row align="center" justify="center">
    <!--
    <v-col cols="2" align="right">
      <router-link to="/research">Research</router-link>
    </v-col>
    -->
    <v-col cols="2">
      <router-link to="/">
        <v-avatar size="100%" max-width="150" min-width="0%">
          <img
            src="../assets/alex_small.jpg"
            alt="Profile image Alex"/>
        </v-avatar>
      </router-link>
    </v-col>
    <!--
    <v-col cols="2" align="left">
      <router-link to="/fun">Projects</router-link>
    </v-col>
    -->
  </v-row>
</template>

<script>
export default {
  name: 'Navigation',

  data: () => ({
  }),
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

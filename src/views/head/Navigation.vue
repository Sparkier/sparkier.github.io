<template>
  <v-row align="center" justify="center">
    <v-col>
      <v-row align="end" justify="end">
        <v-col class="non-growing">
          <router-link to="/publications">Publications</router-link>
        </v-col>
        <v-col class="non-growing">
          <router-link to="/research">Research</router-link>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="2" class="avatar-container">
      <router-link to="/">
        <v-avatar size="100%" max-width="150" min-width="0%">
          <img
            src="@/assets/alex_small.jpg"
            alt="Profile image Alex Bäuerle"
            ref="pic"
          />
        </v-avatar>
      </router-link>
    </v-col>
    <v-col>
      <v-row align="end" justify="begin">
        <v-col class="non-growing">
          <router-link to="/fun">Side Projects</router-link>
        </v-col>
        <v-col class="non-growing">
          <a :href="getBaseURL() + '/CV_Alex_Baeuerle.pdf'" target="_blank">
            CV
          </a>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Navigation',

  methods: {
    getPicHeight() {
      const windowShare = (window.innerWidth / 12) * 2;
      const picHeight = Math.max(Math.min(150, windowShare), 130);
      this.$store.commit('setHeadHeight', picHeight + 84);
    },
    getBaseURL() {
      return window.location.origin;
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
.avatar-container {
  min-width: 130px;
}

.non-growing {
  flex-grow: 0;
  white-space: nowrap;
}
</style>

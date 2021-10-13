<template>
  <v-col class="text-left">
    <Publication v-for="project in researchProjects"
      :key="project.title" :project="project"/>
  </v-col>
</template>

<script>
import {mapState} from 'vuex';
import Publication from './Publication.vue';

export default {
  name: 'Research',

  components: {
    Publication,
  },
  computed: mapState({
    researchProjects: (state) => state.researchProjects,
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  max-width: 1000px;
  line-height: normal;
}
</style>

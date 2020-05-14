<template>
  <v-col class="text-left">
    <ResearchProject v-for="project in researchProjects"
      :key="project.title" :project="project"/>
  </v-col>
</template>

<script>
import {mapState} from 'vuex';
import ResearchProject from './elements/ResearchProject.vue';

export default {
  name: 'Research',

  components: {
    ResearchProject,
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
}
</style>

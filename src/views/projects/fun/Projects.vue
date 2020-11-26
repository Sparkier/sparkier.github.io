<template>
  <v-col class="text-left">
    <FunProject v-for="project in funProjects"
      :key="project.title" :project="project"/>
  </v-col>
</template>

<script>
import {mapState} from 'vuex';
import FunProject from './FunProject.vue';

export default {
  name: 'Projects',

  components: {
    FunProject,
  },
  computed: mapState({
    funProjects: (state) => state.funProjects,
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  max-width: 1000px;
}
</style>

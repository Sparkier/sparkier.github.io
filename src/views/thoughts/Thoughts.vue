<template>
  <v-col class="text-left">
    <ThoughtAbstract
      v-for="(thought, index) in thoughts"
      :key="index"
      :thought="thought"
      :id="index"
    />
  </v-col>
</template>

<script>
import {mapState} from 'vuex';
import ThoughtAbstract from './ThoughtAbstract.vue';

export default {
  name: 'Thoughts',

  components: {
    ThoughtAbstract,
  },
  computed: mapState({
    thoughts: (state) => state.thoughts,
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  max-width: 1000px;
}
</style>

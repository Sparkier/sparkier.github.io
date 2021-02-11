<template>
    <v-col class="text-left">
      <v-container>
        Thoughts are just what the name said, things I am thinking about.
        If I am thinkning about something a lot, there is a chance I write these
        thoughts down here, sometimes in just a few words, sometimes in a few
        more, never polished. If you agree with one of them, just want to
        discuss, but especially if you disagree, please contact me, so we can
        share our thoughts.
        <br/>
        <br/>
        Disclaimer: Most of this is not based on much research, and a lot is not
        even proofread. This is just a loose summary of what I think about.
      </v-container>
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

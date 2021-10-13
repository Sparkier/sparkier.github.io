<template>
    <v-col class="text-left">
      <v-container>
        Deep learning might currently be one of the few technologies that has
        a great transformative potential for us all.
        To advance deep learning, I think one of the most important aspects
        is to understand the technology very well.
        Such an understanding should be accessible to as many people as
        possible.
        Thus, I am excited whenever I have the chance to work on something that
        fosters this understanding or makes it available to more users.
        I think one of the most important research areas right now is AI
        explainability.
        I try to contribute to this field through visualization as a method to
        communicate the abstract ideas inherent to deep learning.
      </v-container>
      <Work/>
      <Talks/>
      <Teaching/>
    </v-col>
</template>

<script>
import {mapState} from 'vuex';
import Teaching from './Teaching.vue';
import Work from './Work.vue';
import Talks from './Talks.vue';

export default {
  name: 'Research',

  components: {
    Teaching,
    Work,
    Talks,
  },
  computed: mapState({
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  max-width: 1000px;
}
</style>

<template>
    <v-col class="text-left">
      <v-container>
        <h2>Talks</h2>
      </v-container>
      <Talk v-for="project in talks"
        :key="project.title" :project="project"/>
    </v-col>
</template>

<script>
import {mapState} from 'vuex';
import Talk from './Talk.vue';

export default {
  name: 'Talks',

  components: {
    Talk,
  },
  computed: mapState({
    talks: (state) => state.talks,
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  max-width: 1000px;
}

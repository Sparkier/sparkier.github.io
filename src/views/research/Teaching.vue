<template>
    <v-col class="text-left">
      <v-container>
      <h2>Teaching</h2>
      </v-container>
      <Lecture
        v-for="(lecture, index) in lectures"
        :key="index"
        :lecture="lecture"
        :id="index"
      />
    </v-col>
</template>

<script>
import {mapState} from 'vuex';
import Lecture from './Lecture.vue';

export default {
  name: 'Teaching',

  components: {
    Lecture,
  },
  computed: mapState({
    lectures: (state) => state.lectures,
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  max-width: 1000px;
}

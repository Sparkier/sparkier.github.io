<template>
    <v-col class="text-left">
      <v-container>
      <h2>Work</h2>
      </v-container>
      <Workplace
        v-for="(workplace, index) in work"
        :key="index"
        :workplace="workplace"
        :id="index"
      />
    </v-col>
</template>

<script>
import {mapState} from 'vuex';
import Workplace from './Workplace.vue';

export default {
  name: 'Work',

  components: {
    Workplace,
  },
  computed: mapState({
    work: (state) => state.work,
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  max-width: 1000px;
}

<template>
  <v-container>
    <v-col class="text-left">
      <v-row>
        <v-col>
          <h1>
            {{ thoughts[id].title }}
          </h1>
          <h3>
            {{ thoughts[id].date.toDateString() }}
          </h3>
          <br />
          <p>
            <span class="thought-content" v-html="thoughts[id].content"></span>
          </p>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'Thoughts',
  props: {id: String},
  computed: mapState({
    thoughts: (state) => state.thoughts,
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.container {
  max-width: 1000px;
}
.thought-content {
  text-align: justify;
  a {
    font-size: inherit;
  }
}
</style>

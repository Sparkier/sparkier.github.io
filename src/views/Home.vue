<template>
  <v-container>
    <v-col class="text-center">
      <h1 class="display-5 mb-5">
        Alex Bäuerle
      </h1>
      <p class="subheading font-weight-regular">
        I am a Ph. D. student at Ulm University. When I am not in front of my
        computer, you will probably find me in the mountains.
      </p>
      <p class="subheading font-weight-regular">
        My research is on visualization and explainability for neural
        networks. In this context, I am always interested in new methods to
        better understand artificial intelligence. I try to help developers in
        this area with techniques that help them communicate and develop new
        approaches. For consumers of AI-powered applications, I work on
        visualizations that help them understand the decision that these
        algorithms make. If you are interested in my research, check out my
        scholar account.
      </p>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: 'Home',

  data: () => ({
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  max-width: 600px;
}
</style>

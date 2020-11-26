<template>
  <v-row justify="center">
    <v-btn icon href="mailto:alex.baeuerle@uni-ulm.de">
      <v-icon color="blue">mdi-email</v-icon>
    </v-btn>
    <v-btn
      icon
      href="https://scholar.google.com/citations?user=131euyAAAAAJ&hl=en&oi=ao"
      target="_blank"
    >
      <v-icon color="blue">mdi-school</v-icon>
    </v-btn>
    <v-btn icon href="https://www.github.com/sparkier" target="_blank">
      <v-icon color="blue">mdi-github</v-icon>
    </v-btn>
    <v-btn icon href="https://www.twitter.com/a13xba" target="_blank">
      <v-icon color="blue">mdi-twitter</v-icon>
    </v-btn>
    <v-btn
      icon
      href="https://www.linkedin.com/in/alex-bäuerle-baa8a81b7"
      target="_blank"
    >
      <v-icon color="blue">mdi-linkedin</v-icon>
    </v-btn>
  </v-row>
</template>

<script>
export default {
  name: 'ContactElements',

  data: () => ({}),
};
</script>

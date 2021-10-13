<template>
  <v-container>
    <v-row>
      <v-col>
        <v-icon color="black">{{workplace.icon}}</v-icon>
        <h3>
          {{ workplace.title }} ({{ workplace.timeframe }})
        </h3>
        <p>
          {{ workplace.abstract }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Workplace',
  props: {
    workplace: Object,
    id: Number,
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  max-width: 250px;
}
p {
  margin: 0 !important;
}
</style>

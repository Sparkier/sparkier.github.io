<template>
  <v-container>
    <v-row>
      <v-col>
        <h3>
          {{ lecture.title }} ({{ lecture.timeframe }})
        </h3>
        <p>
          {{ lecture.abstract }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Lecture',
  props: {
    lecture: Object,
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

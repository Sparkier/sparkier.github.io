<template>
  <v-container>
    <v-row>
      <v-col>
        <h3>
          <router-link :to="'/thought/' + id">
            {{ thought.title }} ({{ thought.date.toDateString() }})
          </router-link>
        </h3>
        <p>
          {{ thought.abstract }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'ThoughtAbstract',
  props: {
    thought: Object,
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
.row {
  margin-left: -8px;
}
</style>

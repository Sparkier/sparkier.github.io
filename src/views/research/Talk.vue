<template>
  <v-container>
    <v-row>
      <v-col>
        <h3>{{ project.title }}</h3>
        <v-row class="neutral-row">
          {{ project.venue }}, {{ project.date.toDateString() }}
          <LinkItem
            v-for="link in project.links"
            :key="link.link"
            :linkWithIcon="link"
          />
        </v-row>
        <v-row>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LinkItem from '../projects/LinkItem.vue';

export default {
  name: 'Talk',

  components: {
    LinkItem,
  },
  props: {
    project: Object,
  },
};
</script>

<style lang="scss" scoped>
p {
  margin: 0 !important;
}
.neutral-row {
  margin-left: 0px;
  margin-top: 5px;
  align-items: center;
}
</style>

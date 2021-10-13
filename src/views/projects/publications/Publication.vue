<template>
  <v-container>
    <v-row class="negative-row">
      <v-col md="auto" cols="12" xs="12">
        <img :src="project.imageSRC" alt="Project Image" />
      </v-col>
      <v-col>
        <h3>{{ project.title }} ({{ project.venue }}, {{ project.year }})</h3>
        <v-row class="neutral-row">
          <Author
            v-for="(author, index) in project.authors"
            :key="author"
            :name="author"
            :last="project.authors.length === index + 1"
            :length="project.authors.length"
          />
        </v-row>
        <v-row class="negative-row">
          <LinkItem
            v-for="link in project.links"
            :key="link.link"
            :linkWithIcon="link"
          />
        </v-row>
        <p class="abstract-container">
          {{ project.abstract }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LinkItem from '../LinkItem.vue';
import Author from './Author.vue';

export default {
  name: 'Publication',

  components: {
    LinkItem,
    Author,
  },
  props: {
    project: Object,
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
.negative-row {
  margin-left: -8px;
}
.neutral-row {
  margin-left: 0px;
  margin-top: 5px;
}
.abstract-container {
  margin-top: 12px !important;
}
</style>

<template>
  <v-container>
    <v-row>
      <v-col md="auto" cols="12" xs="12">
        <img :src="project.imageSRC" alt="Project Image" />
      </v-col>
      <v-col>
        <h3>{{ project.title }} ({{ project.year }})</h3>
        <p>
          {{ project.authors }}
        </p>
        <v-row>
          <LinkItem
            v-for="link in project.links"
            :key="link.link"
            :linkWithIcon="link"
          />
        </v-row>
        <p>
          {{ project.abstract }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LinkItem from '../LinkItem.vue';

export default {
  name: 'ResearchProject',

  components: {
    LinkItem,
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
.row {
  margin-left: -8px;
}
</style>

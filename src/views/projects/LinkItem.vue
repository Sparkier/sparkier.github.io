<template>
  <v-btn icon :href="linkWithIcon.link" target="_blank">
    <v-icon color="blue">{{linkWithIcon.icon}}</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'LinkItem',

  props: {
    linkWithIcon: Object,
  },
};
</script>

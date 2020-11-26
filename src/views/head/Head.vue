<template>
  <v-col class="header" ref="head">
    <Navigation/>
    <ContactElements/>
  </v-col>
</template>

<script>
import ContactElements from './ContactElements.vue';
import Navigation from './Navigation.vue';

export default {
  name: 'Head',

  components: {
    Navigation,
    ContactElements,
  },
};
</script>

<style lang="scss" scoped>
  .header {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 100;
    background-color: rgba($color: #FFFFFF, $alpha: 0.96);
  }
</style>

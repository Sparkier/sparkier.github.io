<template>
  <v-container>
    <v-col>
      <Navigation/>
      <ContactElements/>
    </v-col>
  </v-container>
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

  data: () => ({
  }),
};
</script>

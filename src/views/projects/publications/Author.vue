<template>
  <p v-if="name === 'Alex Bäuerle'">
    {{ precedingString }}<b>{{ name }}</b
    >{{ succeedingString }}
  </p>
  <p v-else>{{ precedingString }}{{ name }}{{ succeedingString }}</p>
</template>

<script>
export default {
  name: 'ResearchProject',

  props: {
    name: String,
    last: Boolean,
    length: Number,
  },
  computed: {
    precedingString() {
      if (this.length === 1) {
        return '';
      }
      if (this.last) {
        return 'and ';
      }
      return '';
    },
    succeedingString() {
      if (this.last) {
        return '';
      }
      if (this.length < 3) {
        return '';
      }
      return ',';
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  padding-right: 5px;
}
</style>

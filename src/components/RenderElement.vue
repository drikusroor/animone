<script lang="ts">
export default {
  props: ["element"],
  mounted() {
  },
};
</script>

<template>
  <div class="element" :style="element.style">
    <div class="element__name">{{ element.name }}</div>
  </div>
</template>

<style scoped>
.element {
  display: grid;
}
.element__name {
  place-self: center;
  background: #eee;
  padding: 0.25em;
  border-radius: 5px;
}
</style>

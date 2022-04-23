<script lang="ts">
import { useElementStore } from "../stores/elements";

export default {
  props: ["element", "index"],
  computed: {
    selected() {
      console.log(
        this.store.selected === this.selected,
        this.store.selected,
        this.index
      );
      return this.store.selected === this.index;
    },
  },
  setup() {
    const store = useElementStore();
    return { store };
  },
};
</script>

<template>
  <div
    class="element"
    :class="{ 'element--selected': selected }"
    :style="element.style"
  >
    <div class="element__name">{{ element.name }}</div>
  </div>
</template>

<style scoped>
.element {
  display: grid;
}
.element--selected {
  border: 2px dashed #000;
}
.element:hover:not(.element--selected) {
    border: 2px dashed #555;
}
.element__name {
  place-self: center;
  background: #eee;
  padding: 0.25em;
  border-radius: 5px;
}
</style>

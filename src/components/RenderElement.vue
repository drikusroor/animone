<script lang="ts">
import { useElementStore } from "../stores/elements";

export default {
  props: ["element", "index"],
  computed: {
    selected() {
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
  @click="store.selectElement(index)"
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
  cursor: pointer;
  transition: filter .15s ease-in-out;
}
.element--selected {
  border: 2px dashed #000;
}
.element:hover:not(.element--selected) {
    border: 2px dashed #555;
    filter:brightness(.9);
}
.element__name {
  place-self: center;
  background: #eee;
  padding: 0.25em;
  border-radius: 5px;
}
</style>

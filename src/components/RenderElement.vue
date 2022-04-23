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
  ></div>
</template>

<style scoped>
.element {
  min-width: 64px;
  min-height: 64px;
  cursor: pointer;
  transition: filter 0.15s ease-in-out;
  background: #ccc;
}
.element--selected {
  border: 2px dashed #000;
}
.element:hover:not(.element--selected) {
  border: 2px dashed #555;
  filter: brightness(0.9);
}
.element__name {
  position: absolute;
  place-self: center;
  background: #eee;
  padding: 0.25em;
  border-radius: 5px;
  bottom: 0.25em;
  margin: 0 auto;
}
</style>

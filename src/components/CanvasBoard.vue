<script lang="ts">
import { useElementStore } from "../stores/elements";
import RenderElement from "./RenderElement.vue";
export default {
  components: {
    RenderElement,
  },
  setup() {
    const store = useElementStore();

    return {
      store,
    };
  },
};
</script>

<template>
  <div class="canvas">
    <RenderElement
      v-for="(element, index) in store.elements"
      :key="element.name"
      :element="element"
      :index="index"
    />
  </div>
</template>

<style scoped>
.canvas {
  width: 100%;
}
</style>

<script lang="ts">
import { useElementStore } from '../stores/elements';
import RenderElement from './RenderElement.vue';
export default {
  components: {
    RenderElement
  },
  setup() {
    const store = useElementStore();

    return {
      store,
    };
  },
}
</script>

<template>
  <div class="canvas">
    <RenderElement v-for="element in store.elements" :element="element" />
  </div>
</template>

<style scoped>
.canvas {
    width: 100%;
    height: calc(100vh - 64px);
}
</style>

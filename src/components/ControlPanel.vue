<script lang="ts">
import ItemsPanel from "./ItemsPanel.vue";
import FormsPanel from "./FormsPanel.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    FormsPanel,
    ItemsPanel,
  },
  data() {
    return {
      showForms: false,
    };
  },
});
</script>

<template>
  <div class="control-panel">
    <ItemsPanel />
    <FormsPanel />
  </div>
</template>

<style scoped>
.control-panel {
  display: flex;
  width: 100%;
  overflow: auto;
}
</style>

<script lang="ts">
import AnimationForm from "./AnimationForm.vue";
import ElementForm from "./ElementForm.vue";
import StepForm from "./StepForm.vue";
import ItemsPanel from "./ItemsPanel.vue";

export default {
  components: {
    AnimationForm,
    ElementForm,
    StepForm,
    ItemsPanel,
  },
  data() {
    return {
      showForms: false,
    };
  },
};
</script>

<template>
  <div class="control-panel">
    <ItemsPanel />
    <ElementForm v-if="showForms" />
    <AnimationForm v-if="showForms" />
    <StepForm v-if="showForms" />
  </div>
</template>

<style scoped>
.control-panel {
  width: 100%;
  overflow: auto;
}
</style>

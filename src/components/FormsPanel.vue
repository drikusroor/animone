<script lang="ts">
import AnimationForm from "./AnimationForm.vue";
import ElementForm from "./ElementForm.vue";
import StepForm from "./StepForm.vue";
import { defineComponent } from "vue";
import { useAnimationStore } from "../stores/animations";
import { useElementStore } from "../stores/elements";

export default defineComponent({
  components: {
    AnimationForm,
    ElementForm,
    StepForm,
  },
  setup() {
    const elementStore = useElementStore();
    const animationStore = useAnimationStore();

    return {
      animationStore,
      elementStore,
    };
  },
});
</script>

<template>
  <div class="forms-panel">
    <ElementForm
      v-if="
        elementStore.selectedElementIndex >= 0 &&
        animationStore.selectedAnimationIndex < 0
      "
    />
    <AnimationForm
      v-if="
        animationStore.selectedAnimationIndex >= 0 &&
        animationStore.selectedStepIndex < 0
      "
    />
    <StepForm v-if="animationStore.selectedStepIndex >= 0" />
  </div>
</template>

<style scoped>
.control-panel {
  display: flex;
  width: 100%;
  overflow: auto;
}
</style>

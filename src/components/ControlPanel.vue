<script setup la
  components: { AnimationForm },ng="ts">
import AnimationForm from './AnimationForm.vue';
import ElementForm from './ElementForm.vue';
</script>

<template>
  <div class="control-panel">
      <ElementForm />
      <AnimationForm />
  </div>
</template>

<style scoped>
.control-panel {
  width: 100%;
}
</style>

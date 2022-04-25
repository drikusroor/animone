<script lang="ts">
import { useAnimationStore } from "../stores/animations";

export default {
  data() {
    return {
      defaultStyle: {
        background: "violet",
        width: Math.random() * 100,
        height: Math.random() * 100,
      },
    };
  },
  props: {
    animation: {
      required: false,
    },
  },
  computed: {
    selectedStep() {
      return this.store.selectedStep;
    },
  },
  methods: {
    onChangeStyle() {
      this.store.updateAnimation(this.store.selectedAnimation, this.index);
    },
    createStep() {
      this.store.createAnimationStep(this.store.selectedAnimationIndex, 0);
    },
  },
  setup() {
    const store = useAnimationStore();

    return {
      store,
    };
  },
};
</script>

<template>
  <div class="animation-form">
    <h2>Steps</h2>
    <form v-if="!!animation && !!selectedStep">
      <h3>Edit step</h3>

      <div v-for="(step, index) in animation?.steps" :key="index">
        <textarea
          v-model="selectedStep.styleString"
          name="style"
          placeholder="Enter styling \n backgroundColor: blue';\nwidth: 300px;\nheight: 100px;"
          @input="(e) => onChangeStyle(selectedAnimation.styleString)"
        />
      </div>
    </form>
    <hr />
    <button @click="createStep">Add Step</button>
    <h2>Steps</h2>
    <ul class="step-form__list">
      <li
        class="step-form__item"
        :class="{
          'step-form__item--selected': index === store.selectedStepIndex,
        }"
        v-for="(step, index) in store.selectedAnimation?.steps"
        :key="step.name"
        @click="store.selectStep(index)"
      >
        Step {{ index + 1 }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.step-form {
  padding: 0.5em;
}
.step-form__list {
  list-style: none;
  padding-left: 0;
}
.step-form__item {
  padding: 0.5em;
  border: 1px solid #ddd;
  border-bottom: 0;
  cursor: pointer;
  transition: background 0.15s ease-in-out;
}
.step-form__item:last-child {
  border-bottom: 1px solid #ddd;
}
.step-form__item:hover {
  background: #eee;
}
.step-form__item--selected {
  border-left: 8px solid #ddd;
}
input[type="text"] {
  width: 100%;
}
textarea {
  width: 100%;
  height: 120px;
}
input,
textarea,
hr,
button {
  margin: 0.5em 0;
}
</style>

<script lang="ts">
import { useAnimationStore } from "../stores/animations";

export default {
  data() {
    return {
      defaultStyle: {
        background: "deepseagreen",
        width: 100,
        height: 100,
      },
    };
  },
  computed: {
    selectedAnimation() {
      return this.store.selectedAnimation;
    },
  },
  methods: {
    onChangeStyle() {
      this.store.updateAnimation(this.store.selectedAnimation, this.index);
    },
    createAnimation() {
      this.store.createAnimation();
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
    <h2>Animations</h2>
    <form v-if="!!selectedAnimation">
      <h3>Edit {{ selectedAnimation.name }}</h3>
      <input
        v-model="selectedAnimation.name"
        type="text"
        name="name"
        placeholder="Name"
      />
      <textarea
        v-model="selectedAnimation.styleString"
        name="style"
        placeholder="Enter styling \n backgroundColor: blue';\nwidth: 300px;\nheight: 100px;"
        @input="(e) => onChangeStyle(selectedAnimation.styleString)"
      />
    </form>
    <hr />
    <h3>Create new animation</h3>
    <button @click="createAnimation()">New animation</button>
    <hr />
    <h2>Animations</h2>
    <ul class="animation-form__list">
      <li
        class="animation-form__item"
        :class="{ 'animation-form__item--selected': index === store.selected }"
        v-for="(animation, index) in store.animations"
        :key="animation.name"
        @click="store.selectAnimation(index)"
      >
        {{ animation.name }} - {{ animation.keyframe + 1 }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.animation-form {
  padding: 0.5em;
}
.animation-form__list {
  list-style: none;
  padding-left: 0;
}
.animation-form__item {
  padding: 0.5em;
  border: 1px solid #ddd;
  border-bottom: 0;
  cursor: pointer;
  transition: background 0.15s ease-in-out;
}
.animation-form__item:last-child {
  border-bottom: 1px solid #ddd;
}
.animation-form__item:hover {
  background: #eee;
}
.animation-form__item--selected {
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

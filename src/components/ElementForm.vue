<script lang="ts">
import { useElementStore } from "../stores/elements";

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
  props: {
    element: {
      required: false,
    },
  },
  computed: {
    selectedElement() {
      return this.store.selectedElement;
    },
  },
  methods: {
    onChangeStyle() {
      this.store.updateElement(this.store.selectedElement, this.index);
    },
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
  <div class="element-form">
    <a-divider class="heading">
      <h3>
        Element: <b>{{ selectedElement.name }}</b>
      </h3>
    </a-divider>
    <form v-if="!!selectedElement">
      <a-input
        v-model:value="selectedElement.name"
        type="text"
        name="name"
        placeholder="Name"
      />
      <textarea
        v-model="selectedElement.styleString"
        name="style"
        placeholder="Enter styling \n backgroundColor: blue';\nwidth: 300px;\nheight: 100px;"
        @input="(e) => onChangeStyle(selectedElement.styleString)"
      />
      <a-input
        v-model:value="selectedElement.image"
        type="text"
        name="image"
        placeholder="Insert image url"
      />
    </form>
  </div>
</template>

<style scoped>
.element-form form {
  padding: 0 12px;
}
.element-form > .heading {
  margin-top: 0;
}
.element-form__list {
  list-style: none;
  padding-left: 0;
}
.element-form__item {
  padding: 0.5em;
  border: 1px solid #ddd;
  border-bottom: 0;
  cursor: pointer;
  transition: background 0.15s ease-in-out;
}
.element-form__item:last-child {
  border-bottom: 1px solid #ddd;
}
.element-form__item:hover {
  background: #eee;
}
.element-form__item--selected {
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

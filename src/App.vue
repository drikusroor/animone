<script lang="ts">
import CanvasBoard from "./components/CanvasBoard.vue";
import ControlPanel from "./components/ControlPanel.vue";
import TimelinePanel from "./components/TimelinePanel.vue";

export default {
  components: {
    CanvasBoard,
    ControlPanel,
    TimelinePanel,
  },
};
</script>

<template>
  <div class="app">
    <header>
      <ControlPanel />
    </header>

    <main>
      <CanvasBoard />
      <TimelinePanel />
    </main>
  </div>
</template>

<style>
@import "./assets/base.css";

#app {
  width: 100%;
  height: 100vh;
  font-weight: normal;
  margin: 0;
  padding: 0;
}

header {
  line-height: 1.5;
}

main {
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  .app {
    display: grid;
    gap: 0;
    place-items: center;
    grid-template-columns: auto 1fr;
    gird-template-rows: 1fr;
  }

  header {
    height: 100vh;
    box-shadow: 5px 0px 15px 0px rgba(0, 0, 0, 0.1);
  }

  header .wrapper {
  }

  main {
    width: 100%;
    height: 100vh;
    display: grid;
    gap: 0;
    place-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>

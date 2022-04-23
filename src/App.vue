<script setup lang="ts">
import Canvas from './components/Canvas.vue'
import ControlPanel from './components/ControlPanel.vue'
import Timeline from './components/Timeline.vue'
</script>

<template>
  <header>
    <ControlPanel />
  </header>

  <main>
    <Canvas />
    <Timeline />
  </main>
</template>

<style>
@import './assets/base.css';

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
  width: 100%;
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
  body {
    display: flex;
    place-items: center;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 360px;
    height: 100vh;
    box-shadow: 5px 0px 15px 0px rgba(0, 0, 0, .1);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  
  main {
    width: 100%;
    padding-left: 360px;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>

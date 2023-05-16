<script setup>
  import { RouterLink, RouterView } from 'vue-router'

  import navigation from './components/navigation.vue'
  import headline from './components/header.vue'

  const components = {
    navigation,
    headline
  }
</script>

<template>
  <navigation />

  <main>
    <headline />
    <RouterView />
  </main>
</template>

<style type="scss" scoped>
  main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-left: 290px;
  }
</style>
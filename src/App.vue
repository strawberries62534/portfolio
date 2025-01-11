<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div id="app">
    <Navbar></Navbar>

    <div id="content">
      <router-view></router-view>
    </div>

  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
}

#content {
  margin-top: 30px;
}
</style>

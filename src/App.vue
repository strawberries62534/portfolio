<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div id="page">
    <Navbar></Navbar>

    <div id="content">
      <router-view></router-view>
    </div>

  </div>
</template>

<style scoped>
#page {
  z-index: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh; /* Ensure full height */
}

#content {
  margin-top: 30px;
  z-index: 1;
}
</style>

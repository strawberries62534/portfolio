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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* Adjusted for Navbar */
  min-height: 100vh;
  /* Ensure the page spans full viewport height */
  text-align: center;
  background-image: url('/src/assets/bubbles.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  z-index: 1;
}

#content {
  margin-top: 140px;
  max-width: 58%;
  padding: 3rem;
  padding-bottom: 10px;
  margin-bottom: 50px;
  background-color: #151d2468;
  backdrop-filter: blur(300px);
  border: 3px solid #6785bf55;
  border-radius: 18px;
  z-index: 1;
}

Navbar {
  z-index: 2;
}
</style>

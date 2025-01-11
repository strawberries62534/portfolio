<template>
  <div id="page">
    <Navbar></Navbar>

    <div id="content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>
    </div>

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: { Navbar }
}
</script>

<style scoped>
#page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* Adjusted for Navbar */
  min-height: 100vh;
  min-width: 100vw;
  /* Ensure the page spans full viewport height */
  text-align: center;
  background-image: url('/bubbles.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  z-index: 1;
}

#content {
  margin-top: 140px;
  max-width: 70%;
  padding: 4rem;
  padding-bottom: 10px;
  padding-top: 15px;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

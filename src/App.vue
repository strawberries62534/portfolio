<template>
  <div id="page">
    <Navbar class="navbar" @link-clicked="showNotification"></Navbar>

    <div id="content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>
    </div>

    <NotificationPopup ref="notification" :content="notificationTip" />

    <p id="footer">{{ $t('app.footer') }}</p>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import Navbar from './components/Navbar.vue'
import NotificationPopup from "./components/NotificationPopup.vue";

export default {
  components: { Navbar, NotificationPopup },
  methods: {
    showNotification() {
      this.$refs.notification.showPopup();
    },
  },

  setup() {
    const router = useRouter();
    const route = useRoute();

    const routes = router.options.routes;

    const handleKeydown = (event) => {
      const currentIndex = routes.findIndex((r) => r.path === route.path);
      if (['ArrowRight'].includes(event.key)) {
        // Navigate to the next route
        const nextIndex = (currentIndex + 1) % routes.length; // Loop back to the first route
        router.push(routes[nextIndex].path);
      } else if (['ArrowLeft'].includes(event.key)) {
        // Navigate to the previous route
        const prevIndex = (currentIndex - 1 + routes.length) % routes.length; // Loop back to the last route
        router.push(routes[prevIndex].path);
      }
    };

    onMounted(() => {
      window.addEventListener('keydown', handleKeydown);
    });

    onUnmounted(() => {
      window.removeEventListener('keydown', handleKeydown);
    });

    return { routes };
  },
  computed: {
    notificationTip() {
      return this.$t('app.tip-notification');
    },
  },
};
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
  /* background-image: url('/bubbles.png'); */
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  z-index: 1;
}

#content {
  margin-top: 140px;
  max-width: 70%;
  min-width: 70%;
  padding: 4rem;
  padding-bottom: 10px;
  padding-top: 15px;
  margin-bottom: 100px;
  background-color: #151d2468;
  backdrop-filter: blur(300px);
  border: 3px solid #6785bf55;
  border-radius: 18px;
  z-index: 1;
}

.navbar {
  z-index: 2;
}

#footer {
  position: fixed;
  bottom: 0;
  text-align: center;
  padding: 8px;
  font-size: .86em;
  opacity: .82;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media print {
  .navbar {
    display: none !important;
  }
}
</style>

<template>
  <div v-if="show" class="notification-popup" @click="hidePopup">
    <div class="popup-content">
      <slot>
        {{ content }}
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotificationPopup",
  props: {
    content: {
      type: String,
      required: false,
      default: "Default notification message",
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showPopup() {
      if (!sessionStorage.getItem("notificationShown")) {
        this.show = true;
        this.fadeTimeout = setTimeout(this.fadeOut, 3500);
        sessionStorage.setItem("notificationShown", "true");
      }
    },
    hidePopup() {
      clearTimeout(this.fadeTimeout);
      this.show = false;
    },
    fadeOut() {
      this.show = false;
    },
  },
};
</script>

<style scoped>
.notification-popup {
  position: fixed;
  top: 5%;
  right: 20px;
  z-index: 9999;
  background-color: #49375755;
  backdrop-filter: blur(15px);
  border: 3px solid #8a7ccc99;
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  animation: fadeIn 0.3s ease-out;
  transition: opacity 0.5s ease-out;
}

.popup-content {
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 750px) {
  .notification-popup {
    display: none !important;
  }
}
</style>

<template>
  <teleport to="body">
    <div class="popup-overlay" @click.self="close">
      <div class="popup-window">
        <button class="close-btn" @click="close">×</button>
        <h2>{{ title }}</h2>
        <p class="popup-content" v-html="content"></p>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  props: ['title', 'content'],
  emits: ['close'],

  methods: {
    close() {
      this.$emit('close');
    },
  },

  mounted() {
    document.body.style.overflow = 'hidden';
  },
  beforeUnmount() {
    document.body.style.overflow = '';
  }
};
</script>

<style>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 99999;
  /* Very high z-index */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
}

.popup-window {
  background: #1e1e2f55;
  backdrop-filter: blur(25px);
  padding: 2rem;
  border-radius: 25px;
  max-width: 80%;
  position: relative;
  border: 2px solid rgba(103, 133, 191, 0.6);
  transform: translate(0, 0);
}

.popup-window h2 {
  margin-right: 120px;
}

.popup-content h3 {
  font-size: 1.4rem;
  margin-left: 0;
}

.close-btn {
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  padding: 0;
  background: transparent !important;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: inherit;
  outline: none;
  box-shadow: none;
  appearance: none;
}

@media (max-width: 600px) {
  .popup-window {
    width: 95%;
    padding: 1rem;
  }

  .popup-window h2 {
    font-size: 1.4rem;
  }
}
</style>

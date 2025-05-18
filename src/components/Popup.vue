<template>
  <teleport to="body">
    <div class="popup-overlay" @click.self="close">
      <div class="popup-window">
        <button class="close-btn" @click="close">×</button>

        <h2>{{ title }}</h2>

        <p class="popup-content" v-if="content" v-html="content"></p>
        <p class="popup-content" v-else>{{ $t('card.not-available') }}</p>

        <div class="button-container">
          <a :href="link" target="_blank" class="button" v-if="link">{{ $t('card.source') }}</a>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  props: ['title', 'content', 'link'],
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
  overflow-y: auto;
  padding: 2rem;
  box-sizing: border-box;
}

.popup-window {
  background: #1e1e2f55;
  backdrop-filter: blur(25px);
  padding: 2rem;
  border-radius: 25px;
  max-width: 50%;
  position: relative;
  border: 3px solid rgba(103, 133, 191, 0.6);
  transform: translate(0, 0);
  max-height: 90vh;
  overflow-y: auto;
}

.popup-window h2 {
  margin-right: 120px;
}

.popup-content h3 {
  font-size: 1.4rem;
  margin-left: 0;
  margin-top: 30px;
}

.button-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
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
    max-width: 85%;
    width: 85%;
    padding: 1rem;
  }

  .popup-window h2 {
    font-size: 1.4rem;
  }
}
</style>

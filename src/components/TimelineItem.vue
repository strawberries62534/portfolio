<template>
  <div class="timeline-item">
    <div class="bubble" @click="openPopup">
      <h3>{{ date }}</h3>

      <p>
        <strong>{{ title }}</strong><br />
        {{ content }}
      </p>

      <span class="read-more">{{ $t('about-me.read-more') }} →</span>
    </div>
    <p class="aside-paragraph">{{ details }}</p>
    <Popup v-if="showPopup" :title="title" :content="popupContent" @close="closePopup" />
  </div>
</template>

<script>
import Popup from './Popup.vue';

export default {
  components: {
    Popup,
  },
  props: {
    date: String,
    title: String,
    content: String,
    details: String,
    popup: String,
  },
  data() {
    return {
      showPopup: false,
      popupContent: '',
    };
  },
  methods: {
    openPopup() {
      if (window.innerWidth < 700) {
        const hasPopup = this.popup !== "" && this.popup !== undefined;
        const popupText = hasPopup ? `<br /><br />${this.popup}` : "";
        this.popupContent = `${this.details}${popupText}`;

      } else {
        this.popupContent = this.popup == undefined ? "" : this.popup;
      }
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    },
  },
};
</script>

<style scoped>
.timeline-item {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  margin: 2rem 0;
  overflow: visible;
  flex-wrap: wrap;
}

.aside-paragraph {
  flex: 1;
  margin: 0;
  margin-right: 5%;
  max-width: 40%;
  text-align: left;
  color: #ffffffaa;
  order: 2;
}

.bubble {
  user-select: none;
  position: relative;
  min-width: 200px;
  max-width: 40%;
  background-color: rgba(21, 29, 36, 0.5);
  border: 2px solid rgba(103, 133, 191, 0.6);
  border-radius: 25px;
  padding: 1.5rem;
  width: 60%;
  margin: 0 auto;
  backdrop-filter: blur(10px);
  color: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  transform: scale(0.95);
}

.bubble:hover {
  transform: scale(1);
}

.bubble h3 {
  margin: 0 0 0.5rem;
  font-size: 1.5rem;
  color: #6785bf;
}

.bubble p {
  margin: 0.5rem 0;
  line-height: 1.5;
}

.read-more {
  position: absolute;
  bottom: 10px;
  right: 25px;
  font-size: 0.85rem;
  opacity: 0.5;
  color: white;
}

@media (max-width: 1000px) {
  .timeline-item {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .aside-paragraph {
    margin-right: 0;
    max-width: 90%;
    order: 1;
    margin-right: 0;
    max-width: 80%;
    text-align: center;
  }

  .bubble {
    cursor: pointer;
    max-width: 100%;
    width: 85%;
    margin-bottom: 1rem;
  }

  .bubble.clickable {
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .bubble.clickable:hover {
    box-shadow: 0 0 10px #6785bf;
  }
}

@media (max-width: 700px) {
  .timeline-item {
    margin: 0 0;
  }

  .aside-paragraph {
    display: none;
    max-width: 95%;
    width: 95%;
  }
}
</style>

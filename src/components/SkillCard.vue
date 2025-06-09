<template>
  <div class="skill-item">
    <div class="skill-bubble" @click="showDetails = !showDetails">
      <div class="skill-header">
        <i v-if="icon" :class="['skill-icon', icon]"></i>
        <h3 class="skill-title">{{ name }}</h3>
      </div>

      <div v-if="percentage" class="skill-gauge">
        <div class="gauge-track">
          <div class="gauge-fill" :style="{ width: percentage + '%', backgroundColor: color }"></div>
        </div>
        <span class="gauge-percentage">{{ percentage }}%</span>
      </div>

      <p class="skill-description">{{ description }}</p>
    </div>
  </div>
</template>


<script>
export default {
  name: "SkillCard",
  props: {
    name: {
      type: String,
      required: true,
    },
    percentage: {
      type: Number,
      required: true,
      validator: (value) => value >= 0 && value <= 100,
    },
    color: {
      type: String,
      default: "#4CAF50",
    },
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.skill-item {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
}

.skill-bubble {
  position: relative;
  width: 100%;
  max-width: 700px;
  padding: 1.5rem;
  border-radius: 20px;
  background-color: rgba(21, 29, 36, 0.4);
  transition: transform 0.3s ease;
  box-sizing: border-box;
  border: 3px solid #6785bfaa;
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.skill-title {
  font-size: 1.6rem;
  margin: 0;
}

.skill-gauge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.75rem 0;
}

.gauge-track {
  flex: 1;
  height: 16px;
  background-color: #ffffff35;
  border-radius: 10px;
  overflow: hidden;
}

.skill-icon {
  font-size: 2.5rem;
  color: #cccccc88;
  margin: 12px;
}

.gauge-fill {
  height: 100%;
  transition: width 0.3s ease;
}

.gauge-percentage {
  font-size: 0.9rem;
  color: #ddd;
}

.skill-description {
  line-height: 1.5;
  color: #ccc;
  margin-top: 1rem;
}

@media (max-width: 1000px) {
  .skill-description {
    font-size: 0.8rem;
  }

  .skill-title {
    font-size: 1.2rem;
  }
}

@media (max-width: 770px) {
  .skill-item {
    padding: 0 0.5rem;
  }

  .skill-bubble {
    padding: 1rem;
  }

  .skill-icon {
    margin: 5px;
  }
}

@media (max-width: 700px) {
  .skill-bubble {
    width: 100%;
    padding: 0.8rem;
  }

  .skill-title {
    font-size: 1.2rem;
  }

  .gauge-percentage {
    font-size: 0.85rem;
  }

  .skill-icon {
    font-size: 1.8rem;
  }
}

@media (max-width: 530px) {
  .skill-icon {
    margin: 0;
    margin-right: 8px;
    padding: 0;
  }

  .skill-header {
    gap: 0;
  }
}

@media (max-width: 490px) {
  .skill-icon {
    display: none;
  }
}

@media (max-width: 415px) {
  .skill-title {
    font-size: 1rem;
  }
}
</style>

<template>
  <div class="skill-gauge">
    <div class="skill-name">{{ skillName }}</div>
    <div class="gauge-wrapper">
      <div class="gauge-fill" :style="{
        width: percentage + '%',
        backgroundColor: color
      }"></div>
      <div class="gauge-background"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillGauge",
  props: {
    skillName: {
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
      default: "#4CAF50", // Default green if no color is provided
    },
  },
};
</script>

<style scoped>
.skill-gauge {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: 10px;
}

.skill-name {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 5px;
}

.gauge-wrapper {
  position: relative;
  width: 100%;
  height: 18px;
  background-color: #ffffff35;
  border-radius: 10px;
  overflow: hidden;
}

.gauge-fill {
  height: 100%;
  border-radius: 5px 0 0 5px;
  transition: width 0.3s ease;
}

.gauge-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 5px;
}
</style>

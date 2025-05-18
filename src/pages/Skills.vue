<template>
  <div>
    <h1 class="title"><span>{{ $t('skills.title') }}</span></h1>

    <div id="container">
      <div id="skill-cards">
        <SkillCard v-for="(skill, index) in skills" :key="index" :name="skill.name[locale]"
          :description="skill.description[locale]" :percentage="skill.percentage" :color="skill.color"
          :icon="skill.icon" />
      </div>
      <div id="strength-cards">
        <SkillCard v-for="(strength, index) in strengths" :key="index" :name="strength.name[locale]"
          :description="strength.description[locale]" :percentage="strength.percentage" :color="strength.color"
          :icon="strength.icon" />
      </div>
    </div>
  </div>
</template>

<script>
import SkillCard from '../components/SkillCard.vue';
import skillsJson from '../assets/skills.json';
import { useI18n } from 'vue-i18n';

export default {
  components: {
    SkillCard,
  },
  setup() {
    const { locale } = useI18n();
    return { locale };
  },
  data() {
    return {
      skills: skillsJson.skills.sort((a, b) => b.percentage - a.percentage),
      strengths: skillsJson.strengths,
    };
  },
};
</script>

<style scoped>
#container {
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
}

#Gauges {
  width: 100%;
  padding: 2rem;
}

#skill-cards,
#strength-cards {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 800px;
  padding: 1rem;
}

@media (max-width: 1000px) {

  #skill-cards,
  #strength-cards {
    padding: 0;
  }
}

@media (max-width: 768px) {
  #skill-cards {
    padding: 0.5rem;
    gap: 1.5rem;
  }
}
</style>

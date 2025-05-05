<template>
  <div>
    <h1 class="title"><span>{{ $t('skills.title') }}</span></h1>

    <div id="skill-cards">
      <SkillCard v-for="(skill, index) in skills" :key="index" :skillName="skill.name[locale]"
        :description="skill.description[locale]" :percentage="skill.percentage" :color="skill.color"
        :icon="skill.icon" />
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
    };
  },
};
</script>

<style scoped>
#Gauges {
  width: 100%;
  padding: 2rem;
}

#skill-cards {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 800px;
  margin: auto;
  padding: 1rem;
}

@media (max-width: 768px) {
  #skill-cards {
    padding: 0.5rem;
    gap: 1.5rem;
  }
}
</style>

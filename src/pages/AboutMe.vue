<template>
  <div id="aboutmecontent">
    <section id="Introduction">
      <h1><span>{{ $t('about-me.title') }}</span></h1>

      <div id="gauges">
        <SkillGauge :skillName="$t('about-me.skills.systems')" :percentage="85" color="#268BD2" />
        <SkillGauge :skillName="$t('about-me.skills.software')" :percentage="38" color="#8776D6" />
        <SkillGauge :skillName="$t('about-me.skills.web')" :percentage="55" color="#9FB6D9" />
      </div>

      <div class="timeline">
        <TimelineItem :date="$t('about-me.timeline.4.date')" :title="$t('about-me.timeline.4.title')"
          :content="$t('about-me.timeline.4.content')" :details="$t('about-me.timeline.4.details')"
          :popup="$t('about-me.timeline.4.popup')" />

        <TimelineItem :date="$t('about-me.timeline.3.date')" :title="$t('about-me.timeline.3.title')"
          :content="$t('about-me.timeline.3.content')" :details="$t('about-me.timeline.3.details')"
          :popup="$t('about-me.timeline.3.popup')" />

        <TimelineItem :date="$t('about-me.timeline.2.date')" :title="$t('about-me.timeline.2.title')"
          :content="$t('about-me.timeline.2.content')" :details="$t('about-me.timeline.2.details')"
          :popup="$t('about-me.timeline.2.popup')" />

        <TimelineItem :date="$t('about-me.timeline.1.date')" :title="$t('about-me.timeline.1.title')"
          :content="$t('about-me.timeline.1.content')" :details="$t('about-me.timeline.1.details')"
          :popup="$t('about-me.timeline.1.popup')" />
      </div>
    </section>
  </div>
</template>

<script>
import SkillGauge from '../components/SkillGauge.vue';
import TimelineItem from '../components/TimelineItem.vue';
import Popup from '../components/Popup.vue';

export default {
  components: {
    SkillGauge,
    TimelineItem,
    Popup,
  },
  data() {
    return {
      showPopup: false,
    };
  },
  methods: {
    openPopup() {
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    },
  },
};
</script>

<style scoped>
* {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
}

#gauges {
  flex-direction: row;
  gap: 1.5rem;
  margin-bottom: 10px;
  width: 100%;
  overflow: hidden;
}

.timeline {
  gap: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2rem 0;
  position: relative;
}

@media (max-width: 768px) {
  #gauges {
    width: 92%;
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>

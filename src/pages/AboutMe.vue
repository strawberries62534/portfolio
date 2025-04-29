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
        <div class="timeline-item">
          <div class="bubble">
            <h3>{{ $t('about-me.timeline.4.date') }}</h3>
            <p>
              <strong>{{ $t('about-me.timeline.4.title') }}</strong><br />
              {{ $t('about-me.timeline.4.content') }}
            </p>
          </div>
          <p class="aside-paragraph">{{ $t('about-me.timeline.4.details') }}</p>
        </div>

        <div class="timeline-item">
          <div class="bubble">
            <h3>{{ $t('about-me.timeline.3.date') }}</h3>
            <p>
              <strong>{{ $t('about-me.timeline.3.title') }}</strong><br />
              {{ $t('about-me.timeline.3.content') }}
            </p>
          </div>
          <p class="aside-paragraph">{{ $t('about-me.timeline.3.details') }}</p>
        </div>

        <div class="timeline-item">
          <div class="bubble">
            <h3>{{ $t('about-me.timeline.2.date') }}</h3>
            <p>
              <strong>{{ $t('about-me.timeline.2.title') }}</strong><br />
              {{ $t('about-me.timeline.2.content') }}
            </p>
          </div>
          <p class="aside-paragraph">{{ $t('about-me.timeline.2.details') }}</p>
        </div>

        <div class="timeline-item">
          <div class="bubble">
            <h3>{{ $t('about-me.timeline.1.date') }}</h3>
            <p>
              <strong>{{ $t('about-me.timeline.1.title') }}</strong><br />
              {{ $t('about-me.timeline.1.content') }}
            </p>
          </div>
          <p class="aside-paragraph">{{ $t('about-me.timeline.1.details') }}</p>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
import SkillGauge from '../components/SkillGauge.vue';

export default {
  components: {
    SkillGauge,
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
  /* font-size: 1.1rem; */
  text-align: left;
  color: #ffffffaa;
  order: 2;
}

.timeline-item:first-child::before {
  top: 50%;
  /* Start line halfway up for the first bubble */
}

.timeline-item:last-child::before {
  height: 50%;
  /* End line halfway down for the last bubble */
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
}

.bubble:hover {
  transform: scale(1.05);
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
    max-width: 100%;
    width: 85%;
    margin-bottom: 1rem;
  }
}

@media (max-width: 768px) {
  #gauges {
    flex-direction: column;
    gap: 0.5rem;
  }

  .aside-paragraph {
    max-width: 100%;
    width: 100%;
  }
}
</style>

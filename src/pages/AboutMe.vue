<template>
  <div id="aboutmecontent">
    <section id="Introduction">
      <h1><span>{{ $t('about-me.title') }}</span></h1>

      <div id="gauges">
        <SkillGauge skillName="Linux" :percentage="85" color="#268BD2" />
        <SkillGauge skillName="C/C++/C#" :percentage="55" color="#8776D6" />
        <SkillGauge skillName="Web languages" :percentage="38" color="#9FB6D9" />
      </div>

      <div class="timeline">
        <div class="timeline-item">
          <div class="bubble">
            <h3>{{ $t('about-me.timeline.1.date') }}</h3>
            <p>
              <strong>{{ $t('about-me.timeline.1.title') }}</strong><br />
              {{ $t('about-me.timeline.1.content') }}
            </p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="bubble">
            <h3>{{ $t('about-me.timeline.2.date') }}</h3>
            <p>
              <strong>{{ $t('about-me.timeline.2.title') }}</strong><br />
              {{ $t('about-me.timeline.2.content') }}
            </p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="bubble">
            <h3>{{ $t('about-me.timeline.3.date') }}</h3>
            <p>
              <strong>{{ $t('about-me.timeline.3.title') }}</strong><br />
              {{ $t('about-me.timeline.3.content') }}
            </p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="bubble">
            <h3>{{ $t('about-me.timeline.4.date') }}</h3>
            <p>
              <strong>{{ $t('about-me.timeline.4.title') }}</strong><br />
              {{ $t('about-me.timeline.4.content') }}
            </p>
          </div>
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
  margin-bottom: 28px;
  width: 100%;
  overflow: hidden;
}

.timeline {
  text-align: center;
  padding: 2rem 0;
  position: relative;
  margin: 2rem auto;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeline-item {
  position: relative;
  width: 100%;
  margin: 2rem 0;
  overflow: visible;
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  height: 100%;
  width: 4px;
  background: rgba(103, 133, 191, 0.3);
  transform: translateX(-50%);
  z-index: -1;
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
  position: relative;
  background-color: rgba(21, 29, 36, 0.8);
  border: 2px solid rgba(103, 133, 191, 0.6);
  border-radius: 25px;
  padding: 1.5rem;
  width: 60%;
  margin: 0 auto;
  text-align: left;
  backdrop-filter: blur(10px);
  color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.bubble:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(103, 133, 191, 0.5);
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

.timeline::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 4px;
  background: rgba(103, 133, 191, 0.5);
  transform: translateX(-50%);
  z-index: -1;
}

@media (max-width: 768px) {
  #gauges {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>

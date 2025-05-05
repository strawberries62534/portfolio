<template>
  <div id="aboutmecontent">
    <section id="Introduction">
      <h1><span>{{ $t('journey.title') }}</span></h1>

      <div class="timeline">
        <TimelineItem :date="$t('journey.timeline.4.date')" :title="$t('journey.timeline.4.title')"
          :content="$t('journey.timeline.4.content')" :details="$t('journey.timeline.4.details')"
          :popup="$t('journey.timeline.4.popup')" />

        <TimelineItem :date="$t('journey.timeline.3.date')" :title="$t('journey.timeline.3.title')"
          :content="$t('journey.timeline.3.content')" :details="$t('journey.timeline.3.details')"
          :popup="$t('journey.timeline.3.popup')" />

        <TimelineItem :date="$t('journey.timeline.2.date')" :title="$t('journey.timeline.2.title')"
          :content="$t('journey.timeline.2.content')" :details="$t('journey.timeline.2.details')"
          :popup="$t('journey.timeline.2.popup')" />

        <TimelineItem :date="$t('journey.timeline.1.date')" :title="$t('journey.timeline.1.title')"
          :content="$t('journey.timeline.1.content')" :details="$t('journey.timeline.1.details')"
          :popup="$t('journey.timeline.1.popup')" />
      </div>
    </section>
  </div>
</template>

<script>
import TimelineItem from '../components/TimelineItem.vue';
import Popup from '../components/Popup.vue';

export default {
  components: {
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
</style>

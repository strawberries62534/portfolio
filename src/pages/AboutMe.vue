<template>
  <div>
    <section id="Introduction">
      <h1><span>About Me</span></h1>

      <h2>My strengths</h2>

      <div id="gauges">
        <SkillGauge skillName="Linux" :percentage="85" color="#268BD2" />
        <SkillGauge skillName="C language" :percentage="60" color="#8776D6" />
        <SkillGauge skillName="Web languages" :percentage="48" color="#9FB6D9" />
      </div>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dignissimos omnis laborum earum officiis
        voluptatibus similique magni, inventore, ducimus dolore eum, excepturi non accusamus. Reprehenderit eius
        sapiente
        quisquam recusandae nulla.</p>

      <h2>My professional experiences</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dignissimos omnis laborum earum officiis
        voluptatibus similique magni, inventore, ducimus dolore eum, excepturi non accusamus. Reprehenderit eius
        sapiente
        quisquam recusandae nulla.</p>
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
#gauges {
  margin-bottom: 28px;
}
</style>

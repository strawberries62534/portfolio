<template>
  <div>
    <h1><span>Welcome to My Portfolio</span></h1>
    <div class="content">
      <div class="intro">
        <p>
          Hi, I'm a 1st-year Computer Science student in the "BUT Informatique" program in Clermont-Ferrand
          (France).<br />
          I love coding, tinkering with my OS, and creating efficient solutions to problems.<br />
          Besides tech I play piano andsometimes draw.<br />
          Welcome to my portfolio!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus a eligendi rerum facere, eaque itaque,
          voluptates quia quisquam corrupti dignissimos placeat ea similique. Dolore, quia delectus. Culpa aspernatur
          inventore laboriosam?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus a eligendi rerum facere, eaque itaque,
          voluptates quia quisquam corrupti dignissimos placeat ea similique. Dolore, quia delectus. Culpa aspernatur
          inventore laboriosam?
        </p>
      </div>
      <Logos></Logos>
    </div>
  </div>
</template>

<script>
import Logos from '../components/Logos.vue'

export default {
  components: {
    Logos
  },
};
</script>

<style scoped>
.content {
  display: flex;
  gap: 10rem;
  width: 80%;
}

.intro {
  flex: 1;
}

.intro h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.intro p {
  font-size: 1.2rem;
  line-height: 1.5;
}
</style>

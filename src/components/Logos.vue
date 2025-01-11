<template>
  <div class="logos-container">
    <div class="logos-wrapper">
      <div class="logos" :style="{ animationPlayState: scrolling ? 'running' : 'paused' }">
        <a v-for="tech in technologies" :key="tech.name" :href="tech.url" target="_blank" rel="noopener noreferrer"
          class="logo">
          <img :src="tech.logo" :alt="tech.name" />
        </a>
      </div>
      <div class="logos" :style="{ animationPlayState: scrolling ? 'running' : 'paused' }">
        <a v-for="tech in technologies" :key="tech.name + '_duplicate'" :href="tech.url" target="_blank"
          rel="noopener noreferrer" class="logo">
          <img :src="tech.logo" :alt="tech.name" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolling: true,
      technologies: [
        { name: "C", url: "https://en.wikipedia.org/wiki/C_(programming_language)", logo: "/c.png" },
        { name: "Git", url: "https://git-scm.com/", logo: "/git.png" },
        { name: "Arch-Linux", url: "https://archlinux.org/", logo: "/arch.png" },
        { name: "Vue.js", url: "https://vuejs.org/", logo: "/vue.png" },
      ],
    };
  },
};
</script>

<style scoped>
.logos-container {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 450px;
  width: 200px;
  min-width: 200px;
  background-color: rgba(21, 29, 36, 0.4);
  border: 3px solid #6785bf55;
  border-radius: 18px;
}

.logos {
  gap: 0.5rem;
  animation: scroll 10s linear infinite;
}

.logos-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 800px;
}

.logo img {
  width: 100px;
  height: 100px;
  transition: transform 0.3s;
  border: 3px solid #6785bf55;
  border-radius: 15px;
  padding: 10px;
}

.logo:hover img {
  transform: scale(1.15);
}

@keyframes scroll {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-100%);
  }
}
</style>

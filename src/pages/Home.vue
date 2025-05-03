<template>
  <div>
    <h1 class="title">
      <span>{{ $t('home.title') }}</span>
    </h1>

    <div class="content">
      <div id="intro">
        <p v-html="$t('home.intro')" />

        <div class="cta-grid">
          <router-link to="/portfolio/projects" class="button">{{ $t('home.projects-button') }}</router-link>
          <router-link to="/portfolio/about-me" class="button">{{ $t('home.aboutme-button') }}</router-link>
          <router-link to="/portfolio/contact" class="button">{{ $t('home.contact-button') }}</router-link>
        </div>
      </div>
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
  width: 80%;
  margin: 0 auto;
}

h1 span {
  font-weight: bold;
  background: linear-gradient(90deg, #A678DE, #67BFD9, #A678DE, #68C4C6, #A678DE);
  background-size: 300% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  animation: gradientOscillate 8s ease-in-out infinite alternate;
}

@keyframes gradientOscillate {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 100% 50%;
  }
}

.title {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 6rem;
}

#intro p {
  font-size: 1.5rem;
  line-height: 1.7;
  max-width: 70ch;
  margin: 0 auto 2rem;
  color: #ccccdd;
  text-wrap: pretty;
}

.cta-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 4.5rem;
}

.logo-scroller {
  width: 800px;
  margin: 0 auto;
  margin-bottom: 40px;
}

.button {
  margin-bottom: 20px;
}

@media screen and (max-width: 1200px) {
  .logo-scroller {
    display: none;
  }

  .content {
    width: 92%;
  }
}

@media screen and (max-width: 530px) {
  .title {
    font-size: 3rem;
    margin-bottom: 2.5rem;
  }

  #intro p {
    font-size: 1.25rem;
    margin: 0 auto 1rem;
  }

  .cta-grid {
    margin-top: 3rem;
    gap: 10px;
  }

  .button {
    margin-bottom: 10px;
  }
}
</style>

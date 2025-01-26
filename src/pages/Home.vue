<template>
  <div>
    <h1><span>{{ $t('home.title') }}</span></h1>
    <Logos class="logo-scroller"></Logos>
    <div class="content">
      <div id="intro">
        <p v-html="$t('home.intro')" />

        <router-link to="/portfolio/gallery" class="button">Go to gallery</router-link>
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

#intro h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

#intro p {
  font-size: 1.2rem;
  line-height: 1.5;
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
</style>

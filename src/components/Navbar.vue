<template>
  <div id="navbar">
    <router-link to="/portfolio/" title="Home" active-class="active" @click.native="handleLinkClick">
      <i class="fas fa-home"></i>
      <span>{{ $t('navbar.home') }}</span>
    </router-link>
    <router-link to="/portfolio/about-me" title="About me" active-class="active" @click.native="handleLinkClick">
      <i class="fas fa-circle-info"></i>
      <span>{{ $t('navbar.about-me') }}</span>
    </router-link>
    <router-link to="/portfolio/projects" title="Projects" active-class="active" @click.native="handleLinkClick">
      <i class="fas fa-book"></i>
      <span>{{ $t('navbar.projects') }}</span>
    </router-link>
    <router-link to="/portfolio/contact" title="Contact" active-class="active" @click.native="handleLinkClick">
      <i class="fas fa-comment"></i>
      <span>{{ $t('navbar.contact') }}</span>
    </router-link>
    <router-link to="/portfolio/command-line" title="Command line" active-class="active"
      @click.native="handleLinkClick">
      <i class="fas fa-terminal" style="font-size: 25px;"></i>
      <span>{{ $t('navbar.command-line') }}</span>
    </router-link>

    <p class="dot">•</p>

    <button @click="toggleLanguage" title="Switch Language">
      <i class="fas fa-globe"></i>
      <span>{{ currentLanguage }}</span>
    </button>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

export default {
  setup() {
    const { locale } = useI18n();

    const switchLanguage = (lang) => {
      locale.value = lang; // Dynamically updates the language
    };

    const toggleLanguage = () => {
      const newLang = locale.value === 'en' ? 'fr' : 'en';
      switchLanguage(newLang);
    };

    // Use computed to dynamically return the current language in uppercase
    const currentLanguage = computed(() => locale.value.toUpperCase());

    return { toggleLanguage, currentLanguage };
  },
  methods: {
    handleLinkClick() {
      this.$emit("link-clicked");
    },
  },
};
</script>

<style scoped>
#navbar {
  z-index: 10;
  background-color: #151d2468;
  backdrop-filter: blur(30px);
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  border: 3px solid #6785bf55;
  border-radius: 20px;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  overflow: hidden;
}

#navbar a {
  text-decoration: none;
  margin: 0 1%;
  display: flex;
  align-items: center;
}

#navbar i {
  font-size: 30px;
  color: rgba(255, 255, 255, 0.87);
  opacity: 85%;
}

#navbar span {
  margin-left: 8px;
  font-size: 18px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.87);
  opacity: 85%;
}

#navbar a:hover i,
#navbar a:hover span,
#navbar button:hover i,
#navbar button:hover span {
  transition: 0.12s ease;
  color: #8776d6;
}

#navbar a.active i {
  color: #7092d4;
}

#navbar a.active span {
  color: #6785bf;
}

#navbar p {
  margin-right: 15px;
  margin-left: 15px;
  margin-top: 20px;
  opacity: 70%;
  font-size: 12px;
  user-select: none;
}

#navbar button {
  background: none;
  backdrop-filter: none;
  border: none;
  color: rgba(255, 255, 255, 0.87);
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
}

#navbar button i {
  margin-right: 8px;
  font-size: 24px;
  opacity: 85%;
}

.dot {
  opacity: 70%;
  user-select: none;
}

@media screen and (max-width: 882px) {
  #navbar span {
    font-size: 15px;
  }
}

@media screen and (max-width: 790px) {
  #navbar {
    backdrop-filter: blur(15px);
  }

  #navbar span {
    display: none;
  }

  #navbar a {
    margin: 0 4.5%;
  }
}

@media (max-width: 510px) {
  #navbar {
    height: 25px;
  }

  #navbar a {
    margin: 0 3.5%;
  }

  #navbar i {
    font-size: 22px;
  }

  #navbar button i {
    font-size: 20px;
  }
}

@media (max-width: 400px) {
  #navbar {
    height: 18px;
  }

  #navbar i {
    font-size: 18px;
  }

  #navbar button i {
    font-size: 17px;
  }
}
</style>

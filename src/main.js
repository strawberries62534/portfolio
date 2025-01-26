import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n'

// Global css
import '/src/base.css';

// Import translation JSON files
import en from './assets/en.json'
import fr from './assets/fr.json'

const messages = {
  en,
  fr
}

// Get the user's preferred language from the browser
const userLanguage = navigator.language || navigator.userLanguage;
const defaultLocale = userLanguage.startsWith('fr') ? 'fr' : 'en';

const i18n = createI18n({
  locale: defaultLocale,
  messages,
})

const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')


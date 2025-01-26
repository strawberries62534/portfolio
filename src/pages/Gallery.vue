<template>
  <div>
    <h1 class="title"><span>{{ $t('gallery.title') }}</span></h1>

    <button @click="sort">{{ $t('gallery.sort-button') }}: {{ $t('gallery.sort-modes.' + sortBy) }}</button>

    <div class="cards">
      <Card v-for="card in sortedCards" :key="card.id" :name="card.name" :description="card.description[locale]"
        :preview="card.preview" :file="card.file" />
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue';
import cards from '../assets/cards.json';
import { useI18n } from 'vue-i18n';

export default {
  components: {
    Card,
  },
  setup() {
    const { locale } = useI18n();
    return { locale };
  },
  data() {
    return {
      sortedCards: [],
      sortBy: "importance",
    };
  },
  methods: {
    loadCards() {
      // Sort by importance (default)
      this.sortedCards = [...cards.cards].sort((a, b) => b.importance - a.importance);
    },
    sort() {
      if (this.sortBy === "name") {
        this.sortedCards.sort((a, b) => b.importance - a.importance); // Sort by importance
        this.sortBy = "importance";
      } else if (this.sortBy === "importance") {
        this.sortedCards.sort((a, b) => a.name.localeCompare(b.name)); // Sort by name
        this.sortBy = "name";
      }
    },
  },
  watch: {
    // Reload cards whenever the language changes
    locale() {
      this.loadCards();
    },
  },
  created() {
    this.loadCards(); // Load cards on component creation
  },
};
</script>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 15px;
}
</style>

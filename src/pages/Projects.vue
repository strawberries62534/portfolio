<template>
  <div>
    <h1 class="title"><span>{{ $t('projects.title') }}</span></h1>

    <button @click="sort">{{ $t('projects.sort-button') }}: {{ $t('projects.sort-modes.' + sortBy) }}</button>

    <div class="category-filter">
      <label v-for="category in allCategories" :key="category" class="checkbox-label button">
        <input type="checkbox" :value="category" v-model="selectedCategories" />
        {{ $t('card.categories.' + category) }}
      </label>
    </div>

    <div class="cards">
      <Card v-for="card in filteredCards" :key="card.id" :name="card.name" :description="card.description[locale]"
        :preview="card.preview" :file="card.file" :categories="card.categories" :details="card.details" />
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
      selectedCategories: [],
    };
  },
  computed: {
    allCategories() {
      const categoriesSet = new Set();
      cards.cards.forEach(card => {
        card.categories?.forEach(cat => categoriesSet.add(cat));
      });
      return Array.from(categoriesSet).sort();
    },
    filteredCards() {
      if (this.selectedCategories.length === 0) {
        return this.sortedCards;
      }
      return this.sortedCards.filter(card =>
        card.categories.some(cat => this.selectedCategories.includes(cat))
      );
    },
  },
  methods: {
    loadCards() {
      this.sortedCards = [...cards.cards].sort((a, b) => b.importance - a.importance);
    },
    sort() {
      if (this.sortBy === "name") {
        this.sortedCards.sort((a, b) => b.importance - a.importance);
        this.sortBy = "importance";
      } else if (this.sortBy === "importance") {
        this.sortedCards.sort((a, b) => a.name.localeCompare(b.name));
        this.sortBy = "name";
      }
    },
  },
  watch: {
    locale() {
      this.loadCards();
    },
  },
  created() {
    this.loadCards();
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

.category-filter {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.category-filter label {
  background-color: #6785bf22;
  border: 2px solid #6785bf55;
  border-radius: 10px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
  color: #fff;
}

.category-filter input[type="checkbox"] {
  margin-right: 6px;
}

@media (max-width: 400px) {
  .cards {
    gap: 5px;
  }
}
</style>

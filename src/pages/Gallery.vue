<template>
  <div>
    <h1 class="title"><span>Gallery</span></h1>

    <button @click="sort">Sort by: {{ sortBy }}</button>

    <div class="cards">

      <Card v-for="card in sortedCards" :key="card.id" :name="card.name" :description="card.description"
        :preview="card.preview" :file="card.file" />
      <div class="footer"></div>

    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import cards from '../assets/cards.json'

export default {
  components: {
    Card
  },
  data() {
    const sortedCards = cards.cards.sort((a, b) => b.id - a.id); // Sort cards in reverse order by ID,
    return {
      sortedCards: sortedCards,
      sortBy: "date", // Initially sorting by "date"
    };
  },
  methods: {
    sort() {
      if (this.sortBy === "date") {
        this.sortedCards.sort((a, b) => {
          // Sort by name in ascending order
          return a.name.localeCompare(b.name);
        });
        this.sortBy = "name";
      } else if (this.sortBy === "name") {
        this.sortedCards.sort((a, b) => b.id - a.id); // Revert to the initial sorting by ID
        this.sortBy = "date";
      }
    },
  },
};
</script>

<style scoped>
h2 {}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
}
</style>

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
    // Sort cards by importance in descending order initially
    const sortedCards = cards.cards.sort((a, b) => b.importance - a.importance);
    return {
      sortedCards: sortedCards,
      sortBy: "importance",
    };
  },
  methods: {
    sort() {
      if (this.sortBy === "name") {
        // Sort by importance in descending order (higher importance comes first)
        this.sortedCards = [...cards.cards].sort((a, b) => b.importance - a.importance);
        this.sortBy = "importance"; // Change sort type to name
      } else if (this.sortBy === "importance") {
        // Sort by name in ascending order
        this.sortedCards = [...cards.cards].sort((a, b) => a.name.localeCompare(b.name));
        this.sortBy = "name"; // Change sort type back to importance
      }
    },
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

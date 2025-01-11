<template>
  <a class="card" :href="file" target="_blank">
    <div class="card-bg" :style="'background-image: url(' + preview + ');'"></div>

    <div class="card-content">
      <div class="popup">
        <h2>Click to see</h2>
      </div>

      <div class="true-content">
        <h2>{{ name }}</h2>
        <p>{{ description }}</p>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: [
    'name',
    'description',
    'date',
    'preview',
    'file'
  ]
}
</script>

<style scoped>
.card:hover {
  transform: scale(1.01);
  border-color: #6785bfff;
}

.card:hover .card-bg {
  transform: scale(1.2);
  filter: brightness(1) blur(5px);
}

.card:hover .true-content {
  transition: .2s ease-out;
  opacity: 0;
}

.card:hover .popup {
  opacity: 1;
  transform: scale(1.5);
}

.card {
  position: relative;
  width: 400px;
  height: 500px;
  border: 3px solid #6785bf55;
  border-radius: 15px;
  margin: 20px;
  align-self: flex-start;
  overflow: hidden;
  font-size: 25px;
  transition: .2s ease-out;
}

.card-bg {
  transition: .2s ease-out;
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  z-index: 0;
}

.card-content {
  position: relative;
  transition: .2s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgba(255, 255, 255, 0.87);
  align-items: center;
  text-align: center;
  height: 100%;
  z-index: 1;
}

.card-content .true-content {
  margin-top: 15%;
}

.popup {
  margin-top: 55%;
  transition: .2s ease-out;
  opacity: 0;
}

img {
  height: 150px;
}

.title {
  margin-left: 30px;
  margin-right: 30px;
}

h2 {
  margin: 0;
  margin-bottom: 15px;
  font-size: 1.5em;
  text-align: center;
}

a {
  text-decoration: none;
}

p {
  margin: 0;
  margin: 0 20px;
  text-align: center;
}

@media screen and (max-width: 730px) {
  .card-bg {
    transform: scale(1.2);
    filter: brightness(.75) blur(0);
  }

  .card:hover .popup {
    margin-top: 55%;
    transition: .2s ease-out;
    opacity: 0;
  }

  .card:hover .true-content {
    transition: .2s ease-out;
    opacity: 100%;
  }
}
</style>

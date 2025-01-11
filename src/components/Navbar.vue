<template>
  <div id="navbar">
    <router-link to="/" title="Accueil">
      <i class="fas fa-home"></i>
    </router-link>
    <p class="dot">⬤</p>
    <router-link to="/attributs" title="Attributs">
      <i class="fas fa-newspaper"></i>
    </router-link>
    <router-link to="/environnement" title="Environnement">
      <i class="fas fa-leaf"></i>
    </router-link>
    <router-link to="/economie" title="Economie">
      <i class="fas fa-coins"></i>
    </router-link>
  </div>
</template>

<style scoped>
#navbar {
  z-index: 10;
  background-color: #39363d77;
  backdrop-filter: blur(18px);
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  border: 3px solid #ffffff10;
  border-radius: 20px;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

#navbar a {
  text-decoration: none;
  margin: 0 28px;
}

#navbar i {
  font-size: 30px;
  color: white;
  opacity: 85%;
}

#navbar a:hover i {
  color: #8776d6;
}

#navbar p {
  margin-right: 15px;
  margin-left: 15px;
  margin-top: 20px;
  opacity: 70%;
  font-size: 12px;
  user-select: none;
}
</style>

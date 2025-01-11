<template>
  <div id="navbar">
    <router-link to="/portfolio/" title="Home" active-class="active">
      <i class="fas fa-home"></i>
      <span>Home</span>
    </router-link>
    <p class="dot">⬤</p>
    <router-link to="/portfolio/about-me" title="About me" active-class="active">
      <i class="fas fa-circle-info"></i>
      <span>About Me</span>
    </router-link>
    <router-link to="/portfolio/gallery" title="Gallery" active-class="active">
      <i class="fas fa-book"></i>
      <span>Gallery</span>
    </router-link>
    <router-link to="/portfolio/contact" title="Contact" active-class="active">
      <i class="fas fa-comment"></i>
      <span>Contact</span>
    </router-link>
    <router-link to="/portfolio/command-line" title="Command line" active-class="active">
      <i class="fas fa-terminal" style="font-size: 25px;"></i>
      <span>Command Line</span>
    </router-link>
  </div>
</template>

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
  margin: 0 28px;
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
  font-size: 14px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.87);
  opacity: 85%;
}

#navbar a:hover i,
#navbar a:hover span {
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

@media screen and (max-width: 900px) {
  #navbar a {
    margin: 0 10px;
  }
}

@media screen and (max-width: 710px) {
  #navbar span {
    display: none;
  }

  #navbar a {
    margin: 0 4.5%;
  }
}
</style>

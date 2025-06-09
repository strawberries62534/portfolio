<template>
  <div class="logos-container">
    <div class="logos-wrapper">
      <div class="logos">
        <a v-for="tech in technologies" :key="tech.name" :href="tech.url" target="_blank" rel="noopener noreferrer"
          class="logo">
          <img :src="tech.logo" :alt="tech.name" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolling: true,
      technologies: [
        { name: "Rust", url: "https://www.rust-lang.org/", logo: "./ferris.png" },
        { name: "Neovim", url: "https://neovim.io/", logo: "./neovim.png" },
        { name: "C", url: "https://en.wikipedia.org/wiki/C_(programming_language)", logo: "./c.png" },
        { name: "Nix", url: "https://nixos.org/", logo: "./nix.png" },
        { name: "C#", url: "https://dotnet.microsoft.com/en-us/languages/csharp", logo: "./cs.png" },
        { name: "C++", url: "https://en.wikipedia.org/wiki/C%2B%2B", logo: "./cpp.png" },
        { name: "Vue", url: "https://vuejs.org/", logo: "./vue.png" },
        // { name: "Gentoo", url: "https://www.gentoo.org/", logo: "./gentoo.png" },
        // { name: "Git", url: "https://git-scm.com/", logo: "./git.png" },
        // { name: "Arch-Linux", url: "https://archlinux.org/", logo: "./arch.png" },
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.applyBackgrounds();
    });
  },
  methods: {
    applyBackgrounds() {
      this.technologies.forEach((_, index) => {
        const img = this.$el.querySelectorAll('.logo img')[index];
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        img.onload = () => {
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          ctx.drawImage(img, 0, 0);
          const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

          let r = 0, g = 0, b = 0, count = 0;
          for (let i = 0; i < data.length; i += 4 * 10) {
            r += data[i];
            g += data[i + 1];
            b += data[i + 2];
            count++;
          }
          r = Math.floor(r / count);
          g = Math.floor(g / count);
          b = Math.floor(b / count);

          const mid = 100;

          const lerp = (start, end, t) => start + (end - start) * t;

          const factor = 0.5;

          r = Math.floor(lerp(r, mid, factor));
          g = Math.floor(lerp(g, mid, factor));
          b = Math.floor(lerp(b, mid, factor));

          const gradient = `linear-gradient(145deg, rgba(${r}, ${g}, ${b}, 1), rgba(${r}, ${g}, ${b}, 0))`;

          img.parentElement.style.background = gradient;
          img.parentElement.style.borderRadius = '15px';
          img.parentElement.style.overflow = 'hidden';
        };
      });
    }
  }
};
</script>

<style scoped>
.logos-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(21, 29, 36, 0.4);
  border: 3px solid #6785bf55;
  border-radius: 18px;
}

.logos-wrapper {
  position: relative;
  width: 100%;
}

.logos {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.logo img {
  height: 100%;
  width: auto;
  transition: transform 0.4s;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 15px;
  background: linear-gradient(145deg, #00000000 0%, #000000ff 500%);
  transform: scale(1.05);
}

.logo {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border: 3px solid #556F95;
  border-radius: 15px;
}

.logo:hover img {
  transform: scale(1.15);
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}
</style>

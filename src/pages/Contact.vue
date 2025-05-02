<template>
  <div>
    <h1><span>{{ $t('contact.title') }}</span></h1>
    <section id="Links">
      <ul>
        <a href="https://github.com/eiiko6" class="icon-link" target="_blank">
          <i class="fab fa-github" target="_blank"></i>
        </a>

        <a href="#" class="icon-link">
          <i class="fab fa-linkedin"></i>
        </a>
      </ul>
    </section>

    <section id="Resume">
      <p>
        {{ $t('contact.resume') }} <a href="./CV.pdf" target="_blank">(pdf)</a>
      </p>
    </section>
  </div>
</template>

<style scoped>
a {
  display: inline;
  margin: 0;
}

#Links {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

#Links ul {
  margin: 0;
  padding: 0;
}

.icon-link {
  font-size: 40px;
  color: #ffffffaa;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 8px;
  align-items: center;
  transition: transform 0.2s ease, color 0.2s ease;
}

.icon-link:hover {
  transform: scale(1.1);
  color: #ffffff;
}
</style>

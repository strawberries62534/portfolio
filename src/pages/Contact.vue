<template>
  <div>
    <h1><span>{{ $t('contact.title') }}</span></h1>
    <section id="Links">
      <ul>
        <a href="#" class="icon-link">
          <i class="fab fa-github"></i>
        </a>

        <a href="#" class="icon-link">
          <i class="fab fa-linkedin"></i>
        </a>
      </ul>
    </section>

    <section id="Resume">
      <p>
        {{ $t('contact.resume') }} <a href="#">Not yet available</a>
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
  transition: color 0.15s ease;
}
</style>

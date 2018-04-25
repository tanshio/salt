<template>
  <section class="container">
    <div>
      <div class="links">
        <ul>
          <li><nuxt-link to="/effect01">About page</nuxt-link></li>
          <li><nuxt-link to="/effect02">About page</nuxt-link></li>
          <li><nuxt-link to="/effect03">About page</nuxt-link></li>
        </ul>
      </div>
      <button @click="setCanvas">レンダー</button>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import html2canvas from 'html2canvas'

export default {
  components: {
    Logo
  },
  methods: {
    setCanvas () {
      html2canvas(document.querySelector('.container')).then(canvas => {
        document.body.appendChild(canvas)
      })
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

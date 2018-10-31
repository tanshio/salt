<template>
  <section class="container2">
    <canvas id="canvas" ref="canvas"></canvas>
  </section>
</template>

<script lang="ts">
  import json from '~/static/data.json'
  import {
    Component,
    Vue,
  } from "nuxt-property-decorator"

  let debounce
  if (process.browser) {
    debounce = require('lodash-es/debounce').default
  }

  import {Particle} from './effect04/Particle'
  import Base from './Base'
  @Component({})
  export default class Effect04 extends Base {

    init() {
      console.log(json)
      console.log('this', this, this.$refs.canvas)
      let particle = new Particle(this.$refs.canvas, this)
      particle.render()
      if (process.browser) {
        window.addEventListener('resize', debounce(particle.resizeHandler, 200))
      }
    }

  }
</script>


<template>
  <section class="container2">
    <canvas id="canvas"></canvas>
    <!--<div style="position: absolute; z-index: 99">{{counter}}</div>-->
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

    mounted() {
      console.log(json)
      console.log('this', this, this.$el.querySelector('#canvas'))
      let particle = new Particle(this.$el.querySelector('#canvas'), this)
      particle.render()
      if (process.browser) {
        window.addEventListener('resize', debounce(particle.resizeHandler, 200))
      }
    }
  }
</script>


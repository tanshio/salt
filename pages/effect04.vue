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

  import {Wave} from './effect03/Wave'
  import Base from './Base'
  @Component({})
  export default class Effect03 extends Base {

    counter: number = 0
    SWING_WIDTH: number = 2
    SWING_HEIGHT: number = 0.05
    SPEED: number = 2

    mounted() {
      console.log(json)
      console.log('this', this, this.$el.querySelector('#canvas'))
      let wave = new Wave(this.$el.querySelector('#canvas'), this)
      wave.render()
      if (process.browser) {
        window.addEventListener('resize', debounce(wave.resizeHandler, 200))
      }
    }
  }
</script>


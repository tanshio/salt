<template>
  <section class="container2">
    <canvas id="canvas"></canvas>
    <!--<div style="position: absolute; z-index: 99">{{counter}}</div>-->
  </section>
</template>

<script lang="ts">
import json from '~/static/data.json'
import { Component, Vue } from 'nuxt-property-decorator'
let debounce
if (process.browser) {
  debounce = require('lodash-es/debounce').default
}

import { Polyline } from './effect05/Polyline'
import Base from './Base'
@Component({})
export default class Effect05 extends Base {
  counter: number = 0
  SWING_WIDTH: number = 2
  SWING_HEIGHT: number = 0.05
  SPEED: number = 2

  mounted() {
    console.log(json)
    console.log('this', this, this.$el.querySelector('#canvas'))
    let polyline = new Polyline(this.$el.querySelector('#canvas'), this)
    polyline.render()
    if (process.browser) {
      window.addEventListener('resize', debounce(polyline.resizeHandler, 200))
    }
  }
}
</script>

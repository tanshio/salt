<template>
  <section class="container2">
    <div class="c-controller">
      <div>
        <input type="range" v-model="SWING_WIDTH" min="0" max="100">{{SWING_WIDTH}}
      </div>
      <div>
        <input type="range" v-model="SWING_HEIGHT" min="0" max="0.5" step="0.01">{{SWING_HEIGHT}}
      </div>
      <div>
        <input type="range" v-model="SPEED" min="0" max="10">{{SPEED}}
      </div>
    </div>
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

  init() {
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


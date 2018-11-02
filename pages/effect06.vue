<template>
  <section class="container2" ref="container">
  </section>
</template>

<script lang="ts">
import json from '~/static/data.json'
import { Component, Vue } from 'nuxt-property-decorator'
let debounce
if (process.browser) {
  debounce = require('lodash-es/debounce').default
}

import Base from './Base'
const fragmentSrc = require('~/assets/common.frag')
let PIXI

if (process.browser) {
  PIXI = require('pixi.js')
}

@Component({})
export default class Effect05 extends Base {

  app: PIXI.Application

  init() {
    this.setCanvas()
    console.log('timer', this.timer)
  }

  leave() {
    this.app.ticker.stop()
    this.app.destroy()
  }

  setCanvas() {
    console.log('next')

    console.log(this.timer)

    PIXI.filters.MyFilter = class MyFilter extends PIXI.Filter {
      constructor() {
        super(
          null, // vertex shader
          fragmentSrc, // fragment shader
          {
            time: { type: '1f', value: 0.0 },
          }, // uniforms
        )
      }
    }

    const width = window.innerWidth
    const height = window.innerHeight
    const img = require('~/assets/img01.png')
    const texture = PIXI.Texture.fromImage(img)
    this.app = new PIXI.Application(width, height, { transparent: true })
    this.$refs.container.appendChild(this.app.view)

    let sprite = new PIXI.Sprite(texture)
    console.log(sprite)
    sprite.width = width
    sprite.height = height
    this.app.stage.addChild(sprite)

    const myFilter = new PIXI.filters.MyFilter()
    this.app.stage.filters = [myFilter]

    // this.timer = requestAnimationFrame(() => {
    this.app.ticker.add(()=> {
        // 時間経過をシェーダに伝える
      myFilter.uniforms.time += this.app.ticker.elapsedMS * 0.001
      // console.log('log')
      // })
    })
  }
}
</script>

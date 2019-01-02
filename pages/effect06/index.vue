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

import Base from '../Base'
const fragmentSrc = require('./effect06.frag')
let PIXI

if (process.browser) {
  PIXI = require('pixi.js')
}

@Component({})
export default class Effect05 extends Base {

  app: PIXI.Application

  init() {
    this.setCanvas()
  }

  leave() {
    this.app.ticker.stop()
    this.app.destroy()
  }

  setCanvas() {

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
    this.app = new PIXI.Application(width, height, {transparent: true})
    this.$refs.container.appendChild(this.app.view)

    let sprite = new PIXI.Sprite(texture)
    console.log(sprite)
    sprite.width = width
    sprite.height = height
    this.app.stage.addChild(sprite)

    const myFilter = new PIXI.filters.MyFilter()
    this.app.stage.filters = [myFilter]
    // this.app.ticker.stop()
    this.app.ticker.start()
    // this.app.ticker.stop()

    this.timer = requestAnimationFrame(() => {
    this.app.ticker.add(()=> {
        // 時間経過をシェーダに伝える
      // myFilter.uniforms.t += 0.1
      myFilter.uniforms.time += this.app.ticker.deltaTime * 0.01
      // console.log('log', myFilter.uniforms.t)
      })
    })
  }
}
</script>

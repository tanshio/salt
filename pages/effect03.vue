<template>
  <section class="container">
    <canvas id="canvas"></canvas>
  </section>
</template>

<script>
import json from '~/static/data.json'
import Logo from '~/components/Logo.vue'
var debounce
if (process.browser) {
  debounce = require('lodash-es/debounce').default
}

class Wave {
  constructor (id) {
    this.canvas = document.getElementById(id)
    this.ctx = this.canvas.getContext('2d')
    this.resizeHandler = this.init.bind(this)
    this.width = window.innerWidth * devicePixelRatio
    this.height = window.innerHeight * devicePixelRatio
    this.resize()
  }

  init () {
    this.resize()
    this.render()
  }

  render () {
    this.ctx.strokeStyle = '#000'
    // this.ctx.lineWidth = 10
    this.ctx.beginPath()
    this.drawSine()
    this.ctx.lineTo(this.width, this.height)
    this.ctx.lineTo(0, this.height)
    this.ctx.closePath()
    this.ctx.stroke()
  }

  drawSine () {
    this.ctx.moveTo(0, this.height * 0.5)
    for (let i = 0; i < this.width; i++) {
      this.ctx.lineTo(i, this.height * 0.5 - Math.cos(i / 360) * this.height * 0.25)
    }
  }

  resize () {
    this.width = window.innerWidth * devicePixelRatio
    this.height = window.innerHeight * devicePixelRatio
    this.canvas.width = this.width
    this.canvas.height = this.height
    this.canvas.style.width = `${this.canvas.width / devicePixelRatio}px`
    this.canvas.style.height = `${this.canvas.height / devicePixelRatio}px`
  }
}

export default {
  components: {
    Logo
  },
  mounted () {
    console.log('hello')
    console.log(json)

    let wave = new Wave('canvas')
    wave.render()
    if (process.browser) {
      window.addEventListener('resize', debounce(wave.resizeHandler, 200))
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      console.log('aaa')
      // `vm` を通じてコンポーネントインスタンスにアクセス
    })
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

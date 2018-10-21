<template>
  <section class="container2">
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

class FillBox {
  constructor (id) {
    this.canvas = document.getElementById(id)
    this.ctx = this.canvas.getContext('2d')
    this.resizeHandler = this.init.bind(this)
    this.resize()
    this.separate = 20
    this.percentage = 0.8
  }

  init () {
    this.resize()
    this.render()
  }

  render () {
    const grid = (this.width / this.separate)
    const size = grid * this.percentage
    const columns = Math.ceil(this.height / grid)
    for (let k = 0; k < columns + 1; k++) {
      for (let i = 0; i < this.separate + 1; i++) {
        this.ctx.beginPath()
        this.ctx.fillStyle = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)})`
        this.ctx.arc(grid * i - grid * 0.5, grid * k - grid * 0.5, size * 0.5, 0, Math.PI * 2, true)
        this.ctx.fill()
      }
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

    let fillBox = new FillBox('canvas')
    fillBox.render()
    if (process.browser) {
      window.addEventListener('resize', debounce(fillBox.resizeHandler, 200))
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log('aaa')
      // `vm` を通じてコンポーネントインスタンスにアクセス
    })
  }
}
</script>


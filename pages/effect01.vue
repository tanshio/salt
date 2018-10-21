<template>
  <section class="container2" @click="setCanvas">
    <canvas id="canvas"></canvas>
  </section>
</template>

<script>
import json from '~/static/data.json'
import Logo from '~/components/Logo.vue'
import html2canvas from 'html2canvas'
let bodyScrollLock
let debounce
if (process.browser) {
  debounce = require('lodash-es/debounce').default
  bodyScrollLock = require('body-scroll-lock')
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
    const rowPadding = grid * (1 - this.percentage) * 0.5
    const columns = Math.ceil(this.height / grid)
    for (let k = 0; k < columns; k++) {
      for (let i = 0; i < this.separate; i++) {
        this.ctx.fillStyle = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)})`
        this.ctx.fillRect(grid * i + rowPadding, grid * k + rowPadding, size, size)
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
    console.log(bodyScrollLock)
    // bodyScrollLock.disableBodyScroll(document.querySelector('.l-container'))

    let fillBox = new FillBox('canvas')
    fillBox.render()
    if (process.browser) {
      // bodyScrollLock.disableBodyScroll(document.querySelector('.container2'))
      window.addEventListener('resize', debounce(fillBox.resizeHandler, 200))
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log('aaa')
      // `vm` を通じてコンポーネントインスタンスにアクセス
    })
  },
  methods: {
    setCanvas () {
      // html2canvas(document.querySelector('.container')).then(canvas => {
      //   document.body.appendChild(canvas)
      // })
    }
  }
}
</script>

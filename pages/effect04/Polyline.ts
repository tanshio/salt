import {Ball} from './Ball'

export class Polyline {

  canvas:HTMLCanvasElement
  ctx: CanvasRenderingContext2D | null
  resizeHandler
  width: number
  height: number
  obj: {
    counter: number,
    timer: number,
  }
  BALL_COUNT: 100
  balls: any = []

  constructor (el, obj) {
    console.log(obj)
    this.canvas = el
    this.ctx = this.canvas.getContext('2d')
    this.resizeHandler = this.init.bind(this)
    this.width = window.innerWidth * devicePixelRatio
    this.height = window.innerHeight * devicePixelRatio
    this.obj = obj
    console.log(this.obj)

    for (let i = 0; i < this.BALL_COUNT; i++) {
      this.balls.push(new Ball({
        x: 0,
        y: 0,
        r: 0,
        degree: 0,
        speed: 0,
      }))
    }

    this.resize()
  }

  init () {
    cancelAnimationFrame(this.obj.timer)
    this.resize()
    this.render()
  }

  render () {
    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.width + 1, this.height + 1);
      this.ctx.strokeStyle = '#000'
      // this.ctx.lineWidth = 10
      this.ctx.beginPath()
      this.ctx.lineTo(this.width + 1, this.height + 1)
      this.ctx.lineTo(-1, this.height + 1)
      this.ctx.closePath()
      this.ctx.stroke()

      this.ctx.arc(grid * i - grid * 0.5, grid * k - grid * 0.5, size * 0.5, 0, Math.PI * 2, true)
      this.ctx.fill()

      this.obj.timer = requestAnimationFrame(this.render.bind(this))
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

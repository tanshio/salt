import {Ball} from './Ball'

export class Particle {

  canvas:HTMLCanvasElement
  ctx: CanvasRenderingContext2D | null
  resizeHandler
  width: number
  height: number
  obj: {
    counter: number,
    timer: number,
  }
  BALL_COUNT:number = 100
  balls: any = []

  constructor (el, obj) {
    console.log(obj)
    this.canvas = el
    this.ctx = this.canvas.getContext('2d')
    this.resizeHandler = this.init.bind(this)
    this.width = window.innerWidth * devicePixelRatio
    this.height = window.innerHeight * devicePixelRatio
    this.obj = obj
    console.log(this.obj, 'obj')

    for (let i = 0; i < this.BALL_COUNT; i++) {
      console.log('a')
      const r = Math.random() * 10 + 2
      this.balls.push(new Ball({
        x: Math.random() * this.width - r * 0.5,
        y: Math.random() * this.height - r * 0.5,
        r: Math.random() * 10 + 2,
        degree: Math.random() * 360,
        speed: Math.random() * 5,
      }))
    }

    console.log(this.balls, 'balls')

    this.resize()
  }

  init () {
    console.log('init')
    cancelAnimationFrame(this.obj.timer)
    this.resize()
    this.render()
  }

  render () {

    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.balls.forEach((ball: Ball) => {
        if (this.ctx) {
          this.ctx.beginPath()
          this.ctx.arc(ball.x, ball.y, ball.r, 0,Math.PI * 2, true)
          this.ctx.fillStyle = ball.color
          this.ctx.fill()
          ball.move()
        }
        // console.log(this.balls)
      })

      this.obj.timer = requestAnimationFrame(this.render.bind(this))
    }
  }

  resize () {
    console.log('resize')
    this.width = window.innerWidth * devicePixelRatio
    this.height = window.innerHeight * devicePixelRatio
    this.canvas.width = this.width
    this.canvas.height = this.height
    this.canvas.style.width = `${this.canvas.width / devicePixelRatio}px`
    this.canvas.style.height = `${this.canvas.height / devicePixelRatio}px`
  }
}

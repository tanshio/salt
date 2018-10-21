export class Wave {

  SWING_HEIGHT: number = 0.05 // 高さの振り幅
  SWING_WIDTH: number = 2 // 横の周期数

  canvas:HTMLCanvasElement
  ctx: CanvasRenderingContext2D | null
  resizeHandler
  width: number
  height: number
  obj: any

  constructor (el, obj) {
    console.log(obj)
    this.canvas = el
    this.ctx = this.canvas.getContext('2d')
    this.resizeHandler = this.init.bind(this)
    this.width = window.innerWidth * devicePixelRatio
    this.height = window.innerHeight * devicePixelRatio
    this.obj = obj
    console.log(this.obj)
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
      this.drawSine()
      this.ctx.lineTo(this.width + 1, this.height + 1)
      this.ctx.lineTo(-1, this.height + 1)
      this.ctx.closePath()
      this.ctx.stroke()

      this.obj.timer = requestAnimationFrame(this.render.bind(this))
    }
  }

  drawSine () {
    this.obj.counter += 1
    if (this.ctx) {
      this.ctx.moveTo(-1, this.height * 0.5)
      for (let i = -1; i < this.width + 2; i++) {
        const sin = Math.sin((i * 180 * this.SWING_WIDTH / this.width + this.obj.counter) * Math.PI / 180)
        this.ctx.lineTo(i, this.height * 0.5 - sin * this.height * this.SWING_HEIGHT)
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

export class Ball {
  x: number
  y: number
  r: number
  degree: number
  speed: number
  color: string

  constructor({
    x,
    y,
    r,
    degree,
    speed,
  }: {
    x: number
    y: number
    r: number
    degree: number
    speed: number
  }) {
    this.x = x
    this.y = y
    this.r = 3 * devicePixelRatio
    this.degree = degree
    this.speed = speed
    // this.color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)})`
    this.color = `rgb(255, 255, 255, 0.8)`
  }

  move() {

    let nextX = this.x + this.speed * Math.cos( this.degree * (Math.PI / 180) )
    let nextY = this.y + this.speed * Math.sin( this.degree * (Math.PI / 180) )

    if(nextX < this.r || nextX > window.innerWidth * devicePixelRatio-this.r){
      this.degree = 180 - this.degree
      nextX = this.x + this.speed * Math.cos( this.degree * (Math.PI / 180) )
    }
    if(nextY < this.r || nextY > window.innerHeight * devicePixelRatio-this.r){
      this.degree = 360 - this.degree
      nextY = this.y + this.speed * Math.sin( this.degree * (Math.PI / 180) )
    }
    this.x = nextX
    this.y = nextY
  }
}

export class Ball {
  x: number
  y: number
  r: number
  degree: number
  speed: number

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
    this.r = r
    this.degree = degree
    this.speed = speed
  }
}

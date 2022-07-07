'use strict'

let theta = 0

this.render = () => {
  const canvas = document.getElementById('canvas')
  const context = canvas.getContext('2d')

  let radius = 0

  context.clearRect(0, 0, 300, 300)

  radius = 60
  context.fillStyle = 'rgba(168, 168, 168, 1)'
  context.beginPath()
  context.arc(150, 150, radius, 0, 2 * Math.PI, true)
  context.closePath()
  context.fill()

  radius = 70
  context.fillStyle = 'rgba(204, 204, 204, 1)'
  context.save()
  context.translate(150, 150)
  context.rotate(theta * (Math.PI / 180))
  context.beginPath()
  context.moveTo(0, 0)
  for (let n = -22.5; n < 22.5; n++) {
    context.lineTo(radius * Math.cos(n * (Math.PI / 180)), radius * Math.sin(n * (Math.PI / 180)))
  }
  context.moveTo(0, 0)
  for (let n = 67.5; n < 112.5; n++) {
    context.lineTo(radius * Math.cos(n * (Math.PI / 180)), radius * Math.sin(n * (Math.PI / 180)))
  }
  context.moveTo(0, 0)
  for (let n = 157.5; n < 202.5; n++) {
    context.lineTo(radius * Math.cos(n * (Math.PI / 180)), radius * Math.sin(n * (Math.PI / 180)))
  }
  context.moveTo(0, 0)
  for (let n = 247.5; n < 292.5; n++) {
    context.lineTo(radius * Math.cos(n * (Math.PI / 180)), radius * Math.sin(n * (Math.PI / 180)))
  }
  context.closePath()
  context.fill()
  context.restore()

  radius = 80
  context.fillStyle = 'rgba(0, 0, 0, 0.31)'
  context.save()
  context.translate(150, 150)
  context.rotate((-theta / 2) * (Math.PI / 180))
  context.beginPath()
  context.arc(0, 0, radius, 0, Math.PI, true)
  context.closePath()
  context.fill()
  context.restore()

  radius = 90
  context.fillStyle = 'rgba(0, 0, 0, 0.52)'
  context.save()
  context.translate(150, 150)
  context.rotate((theta / 2) * (Math.PI / 180))
  context.beginPath()
  context.moveTo(0, 0)
  for (let n = -45; n < 45; n++) {
    context.lineTo(radius * Math.cos(n * (Math.PI / 180)), radius * Math.sin(n * (Math.PI / 180)))
  }
  context.moveTo(0, 0)
  for (let n = 135; n < 225; n++) {
    context.lineTo(radius * Math.cos(n * (Math.PI / 180)), radius * Math.sin(n * (Math.PI / 180)))
  }
  context.closePath()
  context.fill()
  context.restore()

  theta += 1
  setTimeout(this.render, 10)
}

const game = require('../db/db')
const generator = require('../generator/generator')
const SportEvent = require('../items/SportEvent')

const speed = 1

function startGame (count = 0) {
  if (count < 50) {
    const event = generator.randomEvent()
    game.add(event)
    const setTimer = Math.round(Math.random() * 10000 / speed)
    setTimeout(() => startGame(count + 1), setTimer)
    return
  }
  game.add(new SportEvent('Трансляция закончилась', 'stop'))
  // console.log('Трансляция закончилась')
}

module.exports = startGame

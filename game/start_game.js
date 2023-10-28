const game = require('../db/db');
const generator = require('../generator/generator');

function startGame(count = 0) {
    if (count < 5) {
    const event = generator.randomEvent();
    game.add(event);
    const setTimer = Math.round(Math.random() * 10000);
    setTimeout(() => startGame(count + 1 ), setTimer);
    return
    } 
    console.log('Трансляция закончилась')
}




 module.exports = startGame


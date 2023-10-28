const SportEvent = require('../items/SportEvent')

const generator = {
    action: "Идёт перемещение мяча по полю, игроки и той, и другой команды активно пытаются атаковать",
    freekick: "Нарушение правил, будет штрафной удар",
    goal: "Отличный удар! И Г-О-Л!", 

    randomEvent(){
        const random =  Math.floor(Math.random() * 10);
        if(random === 5) {return  new SportEvent(generator.goal);}
        if(random > 5) {return new SportEvent(generator.freekick);}
        return new SportEvent(generator.action);
    }

}

module.exports = generator;


const game = {


  logs: [],
  listener: [],

  add(sportEvent) {
    this.logs.push(sportEvent)
    console.log(sportEvent);
    this.listener.forEach(handler => handler(sportEvent))
  },

  listen (handler) {
    this.listener.push(handler)
  }

}

module.exports = game

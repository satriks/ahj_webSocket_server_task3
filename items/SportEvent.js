class SportEvent {
  constructor (event, type) {
    this.event = event
    this.type = type
    this.date = Date.now()
  }
}

module.exports = SportEvent

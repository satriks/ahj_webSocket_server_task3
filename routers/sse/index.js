const Router = require('koa-router')
const router = new Router()
const { streamEvents } = require('http-event-stream')
const game = require('../../db/db')

router.get('/sse', async (ctx) => {
  streamEvents(ctx.req, ctx.res, {
    async fetch (lastEventId) {
      console.log(lastEventId)

      return []
    },

    async stream (sse) {
      game.listen((item) => {
        sse.sendEvent({
          data: JSON.stringify(item)
        })
      })

      sse.sendEvent({
        event: 'logs',
        data: JSON.stringify(game.logs)
      })

      return () => {}
    }
  })
  ctx.respond = false
})

module.exports = router

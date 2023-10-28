const combineRoute = require('koa-combine-routers')
const sse = require('./sse')

const router = combineRoute(
  sse
)

module.exports = router

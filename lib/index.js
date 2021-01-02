const http = require('./http')
const smtp = require('./smtp')
const Store = require('./store')
const config = require('./config')

const store = new Store()

http(store, config, 8025)
smtp(store, config, 1025)

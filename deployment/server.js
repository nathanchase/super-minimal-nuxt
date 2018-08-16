const express = require('express')
const { Nuxt } = require('nuxt-edge')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
let config = require('./nuxt.config.js')
const nuxt = new Nuxt(config)
app.use(nuxt.render)
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port)

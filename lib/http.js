const Hapi = require('@hapi/hapi')
const Basic = require('@hapi/basic')

module.exports = async function (store, config, port) {
  const server = Hapi.server({ port })

  await server.register(Basic)

  function validate (request, user, pass) {
    return { isValid: user === config.user && pass === config.pass, credentials: { user } }
  }

  server.auth.strategy('simple', 'basic', { validate })
  server.auth.default('simple')

  server.route({
    method: 'GET',
    path: '/api/emails',
    handler (request, h) {
      const mails = store.all()

      return h.response(mails).code(200)
    }
  })

  server.route({
    method: 'DELETE',
    path: '/api/emails',
    handler (request, h) {
      store.clear()

      return h.response().code(204)
    }
  })

  await server.start()

  console.log('HTTP Server listening on port %s!', port)
}

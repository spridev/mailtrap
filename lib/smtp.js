const Parser = require('mailparser')
const Server = require('smtp-server')

module.exports = async function (store, config, port) {
  function onAuth (auth, session, callback) {
    if (auth.username !== config.user || auth.password !== config.pass) {
      return callback(new Error('Invalid username or password'))
    }

    callback(null, { user: auth.username })
  }

  async function onData (stream, session, callback) {
    try {
      const mail = await Parser.simpleParser(stream)

      if (mail.headers) {
        mail.headers = Object.fromEntries(mail.headers)
      }

      store.add(mail)

      callback()
    } catch (e) {
      callback(new Error('Invalid mail'))
    }
  }

  const server = new Server.SMTPServer({ onAuth, onData, hideSTARTTLS: true })

  server.on('error', (err) => console.error('SMTP Error: %s', err))

  server.listen(port)

  console.log('SMTP Server listening on port %s!', port)
}

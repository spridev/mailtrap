const Config = require('./config')

class Store {
  /**
   * Create a new Store instance.
   */
  constructor () {
    this.mails = []
  }

  /**
   * Get all mails.
   *
   * @return {Object[]}
   */
  all () {
    return this.mails
  }

  /**
   * Add a mail.
   *
   * @param {Object} mail
   */
  add (mail) {
    this.mails.unshift(mail)

    while (this.mails.length > Config.size) {
      this.mails.pop()
    }
  }

  /**
   * Clear all mails.
   */
  clear () {
    this.mails = []
  }
}

module.exports = Store

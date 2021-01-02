require('dotenv/config')

module.exports = {
  size: 100,
  user: process.env.MAILTRAP_USER,
  pass: process.env.MAILTRAP_PASS
}

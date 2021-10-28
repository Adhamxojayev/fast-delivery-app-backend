import JWT from 'jsonwebtoken'

export default {
  sign: (payload) => JWT.sign(payload, process.env.KEY),
  verify: (token) => JWT.verify(token, process.env.KEY),
}
const { User } = require('../models');
const jwt = require('jsonwebtoken')
const config = require('../config/config')


function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      res.send(user.toJSON());
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use'
      });
    }
  },
  async login(req, res) {
    try {
      //Store req body - email and password 
      const { email, password } = req.body
      //Search through database for matching email
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      //If there are no matching emails return error
      if (!user) {
        res.status(403).send({
          error: 'This login information was incorrect'
        });
      }

      //Check if password matches

      const isPasswordValid = await user.comparePassword(password)
      console.log(password, user.password)

      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }
      let userJson = user.toJSON()

      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(500).send({
        error: 'There was a problem with your login. Please try again'
      })
    }
  }
};

const bcrypt = require('bcrypt')
const { response } = require('express')
const { request } = require('http')
const usersRouter = require('express').Router()
const User = require('../models/User')


usersRouter.get('/', async (request, response) => {
    const users = await User.find({}).populate('blogs', {title: 1, author: 1})
    response.json(users)
})

usersRouter.post('/', async (request, response) => {
    const body = request.body
  
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)
  
    const user = new User({
      username: body.username,
      name: body.name,
      passwordHash,
    })
  
    const savedUser = await user.save()
  
    response.json(savedUser)
  })
  
  module.exports = usersRouter
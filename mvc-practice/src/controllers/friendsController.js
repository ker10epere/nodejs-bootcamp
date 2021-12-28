const friendsModel = require('../models/friendsModel')

function getFriends(req, res) {
  return res.json(friendsModel.getFriends())
}
function getFriend(req, res) {
  const id = req.params
  return res.json(friendsModel.getFriend(id))
}

function postFriend(req, res) {
  friendsModel.addFriend(req.body)
  return res.status(201).send()
}

module.exports = {
  getFriends,
  getFriend,
  postFriend,
}

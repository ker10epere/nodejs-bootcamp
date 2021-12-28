const { writeFileSync, readFileSync, existsSync } = require('fs')

let path = './friendsModel.json'
if (!existsSync(path)) {
  path = './src/models/friendsModel.json'
}

function addFriend({ name }) {
  const friendsModelDB = parseFriends()
  const length = friendsModelDB.length
  friendsModelDB.push({ id: length, name })
  writeFileSync(path, JSON.stringify(friendsModelDB))
}

function getFriend(id) {
  const friends = parseFriends()
  return friends.find((friend) => friend.id === id)
}

function getFriends() {
  return parseFriends()
}

function parseFriends() {
  const friendsModelDB = JSON.parse(readFileSync(path, { encoding: 'utf-8' }))
  return friendsModelDB
}

module.exports = {
  addFriend,
  getFriend,
  getFriends,
}

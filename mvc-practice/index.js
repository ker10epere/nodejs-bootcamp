const express = require('express')
const friendsController = require('./src/controllers/friendsController')
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())

app.get('/', friendsController.getFriends)

app.listen(PORT, () => console.log(`running on port ${PORT}`))

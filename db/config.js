const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/game-app', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection


db.on('error', console.error.bind(console, 'failed to connect to db'));
db.once('open', () => console.log('successfully connected to the database!'))


module.exports = db
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/game-app', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('successfully connected to the mongoose database!'))


module.exports = db
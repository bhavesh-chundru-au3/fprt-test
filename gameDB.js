const csv = require('csvtojson');
const Event = require('./models/event');

const insertData = async path => {
    const jsonArray = await csv().fromFile(path);
    for(let elem of jsonArray) {
        const event = new Event({...elem})
        event.save()
    }
}

module.exports = insertData
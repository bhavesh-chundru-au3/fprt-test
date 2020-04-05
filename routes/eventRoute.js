const express= require('express')
let router =express.Router();

const Event =require('../models/event');

router.get('/', (req, res) => {
    Event.find().limit(10)
        .exec()
        .then(docs => {
            res.status(200).json(docs)
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
})

router.get('/page/:page', (req, res) => {
    const page = req.params.page;
    let pageSkip = page * 10;
    Event.find().limit(10).skip(pageSkip)
        .exec()
        .then(docs => {
            res.status(200).json(docs)
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
})
router.get('/name/:Name', (req, res) => {
    Event.findOne().where({ Name: req.params.Name })
        .exec()
        .then(docs => {
            if (docs.length > 0) {
                res.status(200).json(docs)
            } else {
                res.status(404).json({ error: "Game not found" })
            }
        })
})

router.get('/name/:Name/:page', (req, res) => {
    const page = req.params.page;
    let pageSkip = (page * 10) - 10;
    Event.find().where({ Name: req.params.Name }).limit(10).skip(pageSkip)
        .exec()
        .then(docs => {
            if (docs.length > 0) {
                res.status(200).json(docs)
            } else {
                res.status(500).json({ message: "Reached the end of the page" })
            }
        })
})
module.exports = router;
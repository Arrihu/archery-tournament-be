const Score = require('../orm/models/score')
const Archer = require('../orm/models/archer')
const Category = require('../orm/models/category')
const EventOrganizer = require('../orm/models/event_organizer')


class ScoreModel {

    static list(req, res, object, option={}) {
        Score.findAll().then(score => {
            object.data = score
            res.send(object)
        })
    }

    static get(req, res, object, option={}) {
        let id = req.params.id

        Score.findById(id).then(score => {
            object.data = score
            res.send(object)
        })
    }

    static create(req, res, object, option={}) {
        let body = req.body

        Archer.findById(body.archerId).then(archer => {
            Category.findById(body.categoryId).then(category => {
                EventOrganizer.findById(body.eventOrganizerId).then(event_organizer => {
                    if (archer && category && event_organizer !== null) {
                        Score.create({
                            date: body.date,
                            end: body.end,
                            archerId: body.archerId,
                            categoryId: body.categoryId,
                            eventOrganizerId: body.eventOrganizerId
                        }).then(score => {
                            object.data = score
                            res.send(object)
                        })
                    }
                })
            })
        })
    }

    static update(req, res, object, option={}) {
        let body = req.body

        Archer.findById(body.archerId).then(archer => {
            Category.findById(body.categoryId).then(category => {
                EventOrganizer.findById(body.eventOrganizerId).then(event_organizer => {
                    if (archer && category && event_organizer !== null) {
                        Score.findById(body.id).then(score => {
                            score.update({
                                date: body.date,
                                end: body.end,
                                archerId: body.archerId,
                                categoryId: body.categoryId,
                                eventOrganizerId: body.eventOrganizerId
                            }).then(score => {
                                object.data = score,
                                res.send(object)
                            })
                        })
                    }
                })
            })
        })
    }

    static delete(req, res, object, option={}) {
        let id = req.params.id

        Score.findById(id).then(score => {
            let deleted = score.destroy()
            if (deleted) {
                object.message = "Data with id " +id+ " has been deleted!"
                res.send(object)
            }
        }).catch(error => {
            object.message = "Data with id " +id+ " does not exist!"
            object.error = true
            res.send(object)
        })
    }
}

module.exports = ScoreModel
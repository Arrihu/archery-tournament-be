const EventOrganizer = require('../orm/models/event_organizer')


class EventOrganizerModel {

    static list(req, res, object, option={}) {
        EventOrganizer.findAll().then(eventorganizer => {
            object.data = eventorganizer
            res.send(object)
        })
    }

    static get(req, res, object, option={}) {
        let id = req.params.id

        EventOrganizer.findById(id).then(eventorganizer => {
            object.data = eventorganizer
            res.send(object)
        })
    }

    static create(req, res, object, option={}) {
        let body = req.body

        EventOrganizer.create({
            position: body.position,
            description: body.description,
            tournamentId: body.tournamentId
        }).then(eventorganizer => {
            object.data = eventorganizer
            res.send(object)
        })
    }

    static update(req, res, option, object={}) {
        let body = req.body

        EventOrganizer.findById(body.id).then(eventorganizer => {
            eventorganizer.update({
                position: body.position,
                description: body.description,
                tournamentId: body.tournamentId
            }).then(panitia => {
                object.data = panitia
                res.send(object)
            })
        })
    }

    static delete(req, res, option, object={}) {
        let id = req.params.id

        EventOrganizer.findById(id).then(eventorganizer => {
            let deleted = eventorganizer.destroy()
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

module.exports = EventOrganizerModel
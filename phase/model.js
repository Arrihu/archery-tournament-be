const Phase = require('../orm/models/phase')


class PhaseModel {

    static list(req, res, object) {
        Phase.findAll().then(phase => {
            object.data = phase
            res.send(object)
        })
    }

    static get(req, res, object) {
        let id = req.params.id

        Phase.findById(id).then(phase => {
            object.data = phase
            res.send(object)
        })
    }

    static create(req, res, object) {
        let body = req.body

        Phase.create({
            property: body.property,
            value: body.value,
            rambahan: body.rambahan,
            arrow: body.arrow
        }).then(phase => {
            object.data = phase
            res.send(object)
        })
    }

    static update(req, res, object) {
        let body = req.body

        Phase.findById(body.id).then(phase => {
            phase.update({
                property: body.property,
                value: body.value,
                rambahan: body.rambahan,
                arrow: body.arrow
            }).then(phase => {
                object.data = phase
                res.send(object)
            })
        })
    }

    static delete(req, res, object) {
        let id = req.params.id

        Phase.findById(id).then(phase => {
            let deleted = phase.destroy()
            if (deleted) {
                object.message = "Data with id " +id+ " has been deleted!"
                res.send(object)
            }
        }).catch(error => {
            object.message = "Data with id " +id+ " doesn't exist!"
            object.error = true
            res.send(object)
        })
    }
}

module.exports = PhaseModel
const Bow = require('../orm/models/bow')


class BowModel {

    static list(req, res, object, option={}) {
        Bow.findAll().then(bow => {
            object.data = bow
            res.send(object)
        })
    }

    static get(req, res, object, option={}) {
        let id = req.params.id

        Bow.findById(id).then(bow => {
            object.data = bow
            res.send(object)
        })
    }

    static create(req, res, object, option={}) {
        let body = req.body

        Bow.create({
            type: body.type
        }).then(bow => {
            object.data = bow
            res.send(object)
        })
    }

    static update(req, res, object, option={}) {
        let body = req.body

        Bow.findById(body.id).then(bow => {
            bow.update({
                type: body.type
            }).then(bow => {
                object.data = bow
                res.send(object)
            })
        })
    }

    static delete(req, res, object, option={}) {
        let id = req.params.id

        Bow.findById(id).then(bow => {
            let deleted = bow.destroy()
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

module.exports = BowModel
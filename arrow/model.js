const Arrow = require('../orm/models/arrow')


class ArrowModel {

    static list(req, res, object, option={}) {
        Arrow.findAll().then(arrow => {
            object.data = arrow
            res.send(object)
        })
    }

    static get(req, res, object,option={}) {
        let id = req.params.id

        Arrow.findById(id).then(arrow => {
            object.data = arrow
            res.send(object)
        })
    }

    static create(req, res, object, option={}) {
        let body = req.body

        Arrow.create({
            type: body.type,
            length: body.length,
            diameter: body.diameter,
            spine: body.spine
        }).then(arrow => {
            object.data = arrow
            res.send(object)
        })
    }

    static update(req, res, object, option={}) {
        let body = req.body

        Arrow.findById(body.id).then(arrow => {
            arrow.update({
                type: body.type,
                length: body.length,
                diameter: body.diameter,
                spine: body.spine
            }).then(arrow => {
                object.data = arrow
                res.send(object)
            })
        })
    }

    static delete(req, res, object, option={}) {
        let id = req.params.id

        Arrow.findById(id).then(arrow => {
            let deleted = arrow.destroy()
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

module.exports = ArrowModel
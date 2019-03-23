const Target = require('../orm/models/target')


class TargetModel {

    static list(req, res, object, option={}) {
        Target.findAll().then(target => {
            object.data = target
            res.send(object)
        })
    }

    static get(req, res, object, option={}) {
        let id = req.params.id

        Target.findById(id).then(target => {
            object.data = target
            res.send(object)
        })
    }

    static create(req, res, object, option={}) {
        let body = req.body

        Target.create({
            type: body.type,
            size: body.size
        }).then(target => {
            object.data = target
            res.send(object)
        })
    }

    static update(req, res, object, option={}) {
        let body = req.body
        
        Target.findById(body.id).then(target => {
            target.update({
                type: body.type,
                size: body.size
            }).then(target => {
                object.data = target
                res.send(object)
            })
        })
    }

    static delete(req, res, object, option={}) {
        let id = req.params.id

        Target.findById(id).then(target => {
            let deleted = target.destroy()
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

module.exports = TargetModel
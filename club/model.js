const Club = require('../orm/models/club')


class ClubModel {

    static list(req, res, object, option={}) {
        Club.findAll().then(club => {
            object.data = club
            res.send(object)
        })
    }

    static get(req, res, object, option={}) {
        let id = req.params.id

        Club.findById(id).then(club => {
            object.data = club
            res.send(object)
        })
    }

    static create(req, res, object, option={}) {
        let body = req.body

        Club.create({
            name: body.name,
            address: body.address
        }).then(club => {
            object.data = club
            res.send(object)
        })
    }

    static update(req, res, object, option={}) {
        let body = req.body

        Club.findById(body.id).then(club => {
            club.update({
                name: body.name,
                address: body.address
            }).then(club => {
                object.data = club
                res.send(object)
            })
        })
    }

    static delete(req, res, object, option={}) {
        let id = req.params.id

        Club.findById(id).then(club => {
            let deleted = club.destroy()
            if (deleted) {
                object.message = "Data with id " +id+ " has been deleted!"
                res.send(object)
            }
        }).catch(error => {
            object.message = "Data with id " +id+ " does not exist"
            res.send(object)
        })
    }
}

module.exports = ClubModel
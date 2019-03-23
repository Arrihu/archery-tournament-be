const Archer = require('../orm/models/archer')


class ArcherModel {

    static list(req, res, object, option={}) {
        Archer.findAll().then(archer => {
            object.data = archer
            res.send(object)
        })
    }

    static get(req, res, object, option={}) {
        let id = req.params.id

        Archer.findById(id).then(archer => {
            object.data = archer
            res.send(object)
        })
    }

    static create(req, res, object, option={}) {
        let body = req.body

        Archer.create({
            name: body.name,
            gender: body.gender,
            age: body.age,
            clubId: body.clubId,
            tournamentId: body.tournamentId
        }).then(archer => {
            object.data = archer
            res.send(object)
        })
    }

    static update(req, res, object, option={}) {
        let body = req.body

        Archer.findById(body.id).then(archer => {
            archer.update({
                name: body.name,
                gender: body.gender,
                age: body.age,
                clubId: body.clubId,
                tournamentId: body.tournamentId
            }).then(archer => {
                object.data = archer
                res.send(object)
            })
        })
    }

    static delete(req, res, object, option={}) {
        let id = req.params.id

        Archer.findById(id).then(archer => {
            let deleted = archer.destroy()
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

module.exports = ArcherModel
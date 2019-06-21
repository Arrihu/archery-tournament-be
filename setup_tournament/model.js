const Category = require('../orm/models/category')
const Tournament = require('../orm/models/tournament')
const Archer = require('../orm/models/archer')


class SetupTournamentModel {

    static list(req, res, object, option={}) {
        Category.findAll({ attributes: ['name'] }).then(category => {
            object.data = category
            res.send(object)
            Tournament.findAll({ attributes: ['name'] }).then(tournament => {
                object.data = tournament
                res.send(object)
                Archer.findAll({ attributes: ['name'] }).then(archer => {
                    object.data = archer
                    res.send(object)
                })
            })
        })
    }

    static create(req, res, object, option={}) {
        let category = req.body.name
        let tournament = req.body.name
        let archer = req.body.name

        Category.create({
            name: category
        }).then(category => {
            object.data = category
            res.send(object)
        })

        Tournament.create({
            name: tournament
        }).then(tournament => {
            object.data = tournament
            res.send(object)
        })

        Archer.create({
            name: archer
        }).then(archer => {
            object.data = archer
            res.send(object)
        })
    }
}

module.exports = SetupTournamentModel
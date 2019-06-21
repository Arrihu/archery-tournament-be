const Category = require('../orm/models/category')
const Target = require('../orm/models/target')
const Tournament = require('../orm/models/tournament')


class CategoryModel {

    static list(req, res, object, option={}) {
        Category.findAll().then(category => {
            object.data = category
            res.send(object)
        })
    }

    static get(req, res, object, option={}) {
        let id = req.params.id

        Category.findById(id).then(category => {
            object.data = category
            res.send(object)
        })
    }

    static create(req, res, object, option={}) {
        let body = req.body

        Target.findById(body.targetId).then(target => {
            Tournament.findById(body.tournamentId).then(tournamet => {
                if (target && tournamet !== null) {
                    Category.create({
                        name: body.name,
                        division: body.division,
                        range: body.range,
                        targetId: body.targetId,
                        tournamentId: body.tournamentId
                    }).then(category => {
                        object.data = category
                        res.send(object)
                    })
                }
            }).catch(error => {
                console.log(error)
            })
        })
    }

    static update(req, res, object, option={}) {
        let body = req.body

        Target.findById(body.targetId).then(target => {
            Tournament.findById(body.tournamentId).then(tournament => {
                if (target && tournament !== null) {
                    Category.findById(body.id).then(category => {
                        category.update({
                            name: body.name,
                            division: body.division,
                            range: body.range,
                            targetId: body.targetId,
                            tournamentId: body.tournamentId
                        }).then(category => {
                            object.data = category
                            res.send(object)
                        })
                    })
                }
            })
        }).catch(error => {
            console.log(error)
        })
    }

    static delete(req, res, object, option={}) {
        let id = req.params.id

        Category.findById(id).then(category => {
            let deleted = category.destroy()
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

module.exports = CategoryModel
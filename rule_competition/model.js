const RuleCompetition = require('../orm/models/rule_competition')


class RuleCompetitionModel {

    static list(req, res, object) {
        RuleCompetition.findAll().then(rc => {
            object.data = rc
            res.send(object)
        })
    }

    static get(req, res, object) {
        let id = req.params.id

        RuleCompetition.findById(id).then(rc => {
            object.data = rc
            res.send(object)
        })
    }

    static create(req, res, object) {
        let body = req.body

        RuleCompetition.create({
            property: body.property,
            value: body.value
        }).then(rc => {
            object.data = rc
            res.send(object)
        })
    }

    static update(req, res, object) {
        let body = req.body

        RuleCompetition.findById(body.id).then(rc => {
            rc.update({
                property: body.property,
                value: body.value
            }).then(rc => {
                object.data = rc
                res.send(object)
            })
        })
    }

    static delete(req, res, object) {
        let id = req.params.id

        RuleCompetition.findById(id).then(rc => {
            let deleted = rc.destroy()
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

module.exports = RuleCompetitionModel
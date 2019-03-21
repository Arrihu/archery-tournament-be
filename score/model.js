const Score = require('../orm/models/score')


class ScoreModel {

    static list(req, res, object, option={}) {
        Score.findAll().then(score => {
            object.data = score
            res.send(object)
        })
    }

    static get(req, res, object, option={}) {
        let id = req.params.id

        Score.findById(id).then(score => {
            object.data = score
            res.send(object)
        })
    }

    static create(req, res, object, option={}) {
        let body = req.body

        Score.create({
            tanggal: body.tanggal,
            babak: body.babak
        }).then(score => {
            object.data = score
            res.send(object)
        })
    }

    static update(req, res, object, option={}) {
        let body = req.body

        Score.findById(body.id).then(score => {
            score.update({
                tanggal: body.tanggal,
                babak: body.babak
            }).then(score => {
                object.data = score
                res.send(object)
            })
        })
    }

    static delete(req, res, object, option={}) {
        let id = req.params.id

        Score.findById(id).then(score => {
            let deleted = score.destroy()
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

module.exports = ScoreModel
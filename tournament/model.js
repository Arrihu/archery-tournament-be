const sqlConn = require('../orm/connection');
const Tournament = require('../orm/models/tournament');


class TournamentModel {
    
    static list(req, res, object, option={}) {
        
        Tournament.findAll().then(tournament => {
            object.data = tournament
            res.send(object)
        });
    }

    static get(req, res, object, option={}) {
        
        let id = req.params.id;
        
        Tournament.findById(id).then(tournament => {
            object.data = tournament
            res.send(object)
        });
    }

    static create(req, res, object, option={}) {
        let body = req.body;

        Tournament.create({
            name: body.name,
            address: body.address,
            start_date: body.start_date,
            end_date: body.end_date
        }).then(tournament => {
            object.data = tournament
            res.send(object)
        });
    }

    static update(req, res, object, option={}) {
        let body = req.body;

        Tournament.findById(body.id).then(tournament => {
            tournament.update({
                name: body.name,
                address: body.address,
                start_date: body.start_date,
                end_date: body.end_date
            }).then(tournament => {
                object.data = tournament
                res.send(object)
            });
        });
    }

    static delete(req, res, object, option={}) {
        let id = req.params.id;

        Tournament.findById(id).then(tournament => {
            let deleted = tournament.destroy();
            if (deleted) {
                object.message = "Data with id " + id + "was successfully deleted!";
                res.send(object);
            }
        }).catch(error => {
            object.message = "Data with id " + id + "does not exist!";
            object.error = true;
            res.send(object);
        })
    }
}

module.exports = TournamentModel;
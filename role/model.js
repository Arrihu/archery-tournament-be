const Role = require('../orm/models/role')
const User = require('../orm/models/user')


class RoleModel {

    static list(req, res, object, option={}) {
        Role.findAll({include: [{all: true}]}).then(role => {
            object.data = role
            res.send(object)
        })
    }

    static get(req, res, object, option={}) {
        let id = req.params.id
        Role.findById(id).then(role => {
            object.data = role
            res.send(object)
        })
    }

    static create(req, res, object, option={}) {
        let body = req.body;

        User.findById(body.userId).then(user => {
            if (user!=null) {
                Role.create({
                    name: body.name,
                    description: body.description,
                    userId: body.userId
                }).then(role => {
                    object.data = role
                    res.send(object)
                })
            }
        }).catch(error => {
            console.log(error)
        })
    }

    static update(req, res, object, option={}) {
        let body = req.body;

        User.findById(body.userId).then(user => {
            if (user != null) {
                Role.findById(body.id).then(role => {
                    role.update({
                        name: body.name,
                        description: body.description,
                        userId: body.userId
                    }).then(role => {
                        object.data = role
                        res.send(object)
                    });
                });
            }
        }).catch(error => {
            console.log(error)
        });
    }

    static delete(req, res, object, option={}) {
        let id = req.params.id       
    
        Role.findById(id).then(role => {
            var deleted = role.destroy();
            if (deleted) {
                object.message = "Data with id " +id+ " was deleted!"
                res.send(object)
            }
        }).catch(error => {
            object.message = "Id " +id+ " does not exist!"
            object.error = true
            res.send(object)
        })
    }
}

module.exports = RoleModel
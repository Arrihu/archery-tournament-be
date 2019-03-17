// all logic code will be here
const User = require('../orm/models/user')
const sqlConn = require('../orm/connection') 
const Role = require('../orm/models/role')


class UserModel {

    static list(req, res, object, option={}) {
         User.findAll().then(user => {
             object.data = user
             res.send(object)
         })
    }

    static get(req, res, object, option={}) {
        var id = req.params.id;
        User.findById(id).then(user => {
            object.data = user
            res.send(object)
        });
    }

    static create(req, res, object, option={}) {
        let body = req.body
        
        User.create({
            name: body.name,
            email: body.email,
            username: body.username,
            password: body.password
        }).then(user => {
            object.data = user
            res.send(object)
        });
    }

    static update(req, res, object, option={}) {
        let body = req.body;

        User.findById(body.id).then(user =>{
            user.update({
                name: body.name,
                email: body.email,
                username: body.username,
                password: body.password,
            }).then(user=>{
                object.data = user
                res.send(object)
            })
        })
    }

    static delete(req, res, object, option={}) {
        let id = req.params.id
        
        User.findById(id).then(user => {
            var deleted = user.destroy();
            if (deleted){
                object.message = "User with id "+id+" was deleted!"
                res.send(object)
            }

        }).catch(error => {
            // Ooops, do some error-handling
            object.message = "ID "+id+" is does not exist";
            object.error = true;
            res.send(object);
        });
    }
}

module.exports = UserModel

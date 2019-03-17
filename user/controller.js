// just get data from model
var UserModel = require('./model')
var sqlConn = require('../orm/connection')

class UserList {

    static get(req, res){
        let result = {
            data: null,
            message: '',
            error: false,
        };
       UserModel.list(req, res, result);
    }
}

class UserGet {

    static get(req, res){
        let result = {
            data: null,
            message: '',
            error: false,
        };
       UserModel.get(req, res, result);        
    }
}

class UserCreate {

    static post(req, res) {
        // res.send(req.body)
        let result = {
            data: null,
            message: '',
            error: false
        }
        UserModel.create(req, res, result)
    }
}

class UserUpdate {

    static post(req, res) {
         // res.send(req.body)
        let result = {
            data: null,
            message: '',
            error: false
        }
        UserModel.update(req, res, result)
    }
}

class UserDelete {
    
    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }
        UserModel.delete(req, res, result)
    }
}


module.exports = {
    UserList: UserList,
    UserGet: UserGet,
    UserCreate: UserCreate,
    UserUpdate: UserUpdate,
    UserDelete: UserDelete
}
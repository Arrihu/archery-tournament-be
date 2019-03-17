const RoleModel = require('./model');


class RoleList {
    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        };
        RoleModel.list(req, res, result);
    }
}

class RoleGet {
    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }
        RoleModel.get(req, res, result)
    }
}

class RoleCreate {
    static post(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }
        RoleModel.create(req, res, result)
    }
}

class RoleUpdate {
    static post(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }
        RoleModel.update(req, res, result)
    }
}

class RoleDelete {
    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }
        RoleModel.delete(req, res, result)
    }
}

module.exports = {
    RoleList: RoleList,
    RoleGet: RoleGet,
    RoleCreate: RoleCreate,
    RoleUpdate: RoleUpdate,
    RoleDelete: RoleDelete
}
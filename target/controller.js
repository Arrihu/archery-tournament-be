const TargetModel = require('./model')


class TargetList {

    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        TargetModel.list(req, res, result)
    }
}

class TargetGet {

    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        TargetModel.get(req, res, result)
    }
}

class TargetCreate {

    static post(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        TargetModel.create(req, res, result)
    }
}

class TargetUpdate {

    static post(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        TargetModel.update(req, res, result)
    }
}

class TargetDelete {

    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        TargetModel.delete(req, res, result)
    }
}

module.exports = {
    TargetList: TargetList,
    TargetGet: TargetGet,
    TargetCreate: TargetCreate,
    TargetUpdate: TargetUpdate,
    TargetDelete: TargetDelete
}
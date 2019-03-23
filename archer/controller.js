const ArcherModel = require('./model')


class ArcherList {

    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        ArcherModel.list(req, res, result)
    }
}

class ArcherGet {
    
    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }
    
        ArcherModel.get(req, res, result)
    }
}

class ArcherCreate {

    static post(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }
    
        ArcherModel.create(req, res, result)
    }
}

class ArcherUpdate {
    
    static post(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }
    
        ArcherModel.update(req, res, result)
    }
}

class ArcherDelete {

    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }
    
        ArcherModel.delete(req, res, result)
    }
}

module.exports = {
    ArcherList: ArcherList,
    ArcherGet: ArcherGet,
    ArcherCreate: ArcherCreate,
    ArcherUpdate: ArcherUpdate,
    ArcherDelete: ArcherDelete
}
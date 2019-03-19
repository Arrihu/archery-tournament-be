const ArrowModel = require('./model')


class ArrowList {

    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        ArrowModel.list(req, res, result)
    }
}

class ArrowGet {

    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        ArrowModel.get(req, res, result)
    }
}

class ArrowCreate {

    static post(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        ArrowModel.create(req, res, result)
    }
}

class ArrowUpdate {

    static post(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        ArrowModel.update(req, res, result)
    }
}
class ArrowDelete {

    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        ArrowModel.delete(req, res, result)
    }
}

module.exports = {
    ArrowList: ArrowList,
    ArrowGet: ArrowGet,
    ArrowCreate: ArrowCreate,
    ArrowUpdate: ArrowUpdate,
    ArrowDelete: ArrowDelete
}
const BowModel = require('./model')


class BowList {

    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        BowModel.list(req, res, result)
    }
}

class BowGet {

    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        BowModel.get(req, res, result)
    }
}

class BowCreate {

    static post(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        BowModel.create(req, res, result)
    }
}

class BowUpdate {

    static post(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        BowModel.update(req, res, result)
    }
}

class BowDelete {

    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        BowModel.delete(req, res, result)
    }
}

module.exports = {
    BowList: BowList,
    BowGet: BowGet,
    BowCreate: BowCreate,
    BowUpdate: BowUpdate,
    BowDelete: BowDelete
}
const ClubModel = require('./model')


class ClubList {

    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        ClubModel.list(req, res, result)
    }
}

class ClubGet {

    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        ClubModel.get(req, res, result)
    }
}

class ClubCreate {

    static post(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        ClubModel.create(req, res, result)
    }
}

class ClubUpdate {

    static post(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        ClubModel.update(req, res, result)
    }
}

class ClubDelete {

    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        ClubModel.delete(req, res, result)
    }
}


module.exports = {
    ClubList: ClubList,
    ClubGet: ClubGet,
    ClubCreate: ClubCreate,
    ClubUpdate: ClubUpdate,
    ClubDelete: ClubDelete
}
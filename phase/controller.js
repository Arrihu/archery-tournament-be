const PhaseModel = require('./model')


class PhaseList {

    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        PhaseModel.list(req, res, result)
    }
}

class PhaseGet {

    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        PhaseModel.get(req, res, result)
    }
}

class PhaseCreate {

    static post(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        PhaseModel.create(req, res, result)
    }
}

class PhaseUpdate {

    static post(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        PhaseModel.update(req, res, result)
    }
}

class PhaseDelete {

    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        PhaseModel.delete(req, res, result)
    }
}

module.exports = {
    PhaseList: PhaseList,
    PhaseGet: PhaseGet,
    PhaseCreate: PhaseCreate,
    PhaseUpdate: PhaseUpdate,
    PhaseDelete: PhaseDelete
}
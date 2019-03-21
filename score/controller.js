const ScoreModel = require('./model')


class ScoreList {

    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }   

        ScoreModel.list(req, res, result)
    }
}

class ScoreGet {

    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }   

        ScoreModel.get(req, res, result)
    }
}

class ScoreCreate {

    static post(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }   

        ScoreModel.create(req, res, result)
    }
}

class ScoreUpdate {

    static post(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }   

        ScoreModel.update(req, res, result)
    }
}

class ScoreDelete {

    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }   

        ScoreModel.delete(req, res, result)
    }
}

module.exports = {
    ScoreList: ScoreList,
    ScoreGet: ScoreGet,
    ScoreCreate: ScoreCreate,
    ScoreUpdate: ScoreUpdate,
    ScoreDelete: ScoreDelete
}
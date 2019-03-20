const RuleCompetitionModel = require('./model')


class RuleCompetitionList {

    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        RuleCompetitionModel.list(req, res, result)
    }
}

class RuleCompetitionGet {

    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        RuleCompetitionModel.get(req, res, result)
    }
}

class RuleCompetitionCreate {

    static post(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        RuleCompetitionModel.create(req, res, result)
    }
}

class RuleCompetitionUpdate {

    static post(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        RuleCompetitionModel.update(req, res, result)
    }
}

class RuleCompetitionDelete {

    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        RuleCompetitionModel.delete(req, res, result)
    }
}

module.exports = {
    RuleCompetitionList: RuleCompetitionList,
    RuleCompetitionGet: RuleCompetitionGet,
    RuleCompetitionCreate: RuleCompetitionCreate,
    RuleCompetitionUpdate: RuleCompetitionUpdate,
    RuleCompetitionDelete: RuleCompetitionDelete
}
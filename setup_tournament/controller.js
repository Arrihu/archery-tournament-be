const SetupTournamentModel = require('./model')


class SetupTournamentList {

    static get(req, res) {
        const result = {
            data: null,
            message: '',
            error: false
        }
        SetupTournamentModel.list(req, res, result)
    }
}

class SetupTournamentCreate {

    static post(req, res) {
        const result = {
            data: null,
            message: '',
            error: false
        }
        SetupTournamentModel.create(req, res, result)
    }
}

module.exports = {
    SetupTournamentCreate: SetupTournamentCreate,
    SetupTournamentList: SetupTournamentList
}
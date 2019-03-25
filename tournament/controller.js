const SetupModel = require('./model');


class SetupList {

    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        };

        SetupModel.list(req, res, result);
    }
}

class SetupGet {

    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        SetupModel.get(req, res, result)
    }
}

class SetupCreate {

    static post(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        SetupModel.create(req, res, result);
    }
}

class SetupUpdate {

    static post(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        };

        SetupModel.update(req, res, result);
    }
}

class SetupDelete {

    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        SetupModel.delete(req, res, result);
    }
}


module.exports = {
    SetupList: SetupList,
    SetupGet: SetupGet,
    SetupCreate: SetupCreate,
    SetupUpdate: SetupUpdate,
    SetupDelete: SetupDelete
};
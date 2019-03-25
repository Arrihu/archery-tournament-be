const EventOrganizerModel = require('./model')


class EventOrganizerList {

    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        EventOrganizerModel.list(req, res, result)
    }
}

class EventOrganizerGet {

    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        EventOrganizerModel.get(req, res, result)
    }
}

class EventOrganizerCreate {

    static post(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        EventOrganizerModel.create(req, res, result)
    }
}

class EventOrganizerUpdate {

    static post(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        EventOrganizerModel.update(req, res, result)
    }
}

class EventOrganizerDelete {

    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        EventOrganizerModel.delete(req, res, result)
    }
}

module.exports = {
    EventOrganizerList: EventOrganizerList,
    EventOrganizerGet: EventOrganizerGet,
    EventOrganizerCreate: EventOrganizerCreate,
    EventOrganizerUpdate: EventOrganizerUpdate,
    EventOrganizerDelete: EventOrganizerDelete,
}
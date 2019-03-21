const CategoryModel = require('./model')


class CategoryList {

    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        CategoryModel.list(req, res, result)
    }
}
class CategoryGet {

    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        CategoryModel.get(req, res, result)
    }
}

class CategoryCreate {

    static post(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        CategoryModel.create(req, res, result)
    }
}

class CategoryUpdate {

    static post(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        CategoryModel.update(req, res, result)
    }
}

class CategoryDelete {

    static get(req, res) {
        let result = {
            data: null,
            message: '',
            error: false
        }

        CategoryModel.delete(req, res, result)
    }
}

module.exports = {
    CategoryList: CategoryList,
    CategoryGet: CategoryGet,
    CategoryCreate: CategoryCreate,
    CategoryUpdate: CategoryUpdate,
    CategoryDelete: CategoryDelete
}
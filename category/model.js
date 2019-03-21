const Category = require('../orm/models/category')


class CategoryModel {

    static list(req, res, object, option={}) {
        Category.findAll().then(category => {
            object.data = category
            res.send(object)
        })
    }

    static get(req, res, object, option={}) {
        let id = req.params.id

        Category.findById(id).then(category => {
            object.data = category
            res.send(object)
        })
    }

    static create(req, res, object, option={}) {
        let body = req.body

        Category.create({
            nama: body.nama,
            divisi: body.divisi,
            jarak_tembak: body.jarak_tembak,
            jenis_target: body.jenis_target
        }).then(category => {
            object.data = category
            res.send(object)
        })
    }

    static update(req, res, object, option={}) {
        let body = req.body

        Category.findById(body.id).then(category => {
            category.update({
                nama: body.nama,
                divisi: body.divisi,
                jarak_tembak: body.jarak_tembak,
                jenis_target: body.jenis_target
            }).then(category => {
                object.data = category
                res.send(object)
            })
        })
    }

    static delete(req, res, object, option={}) {
        let id = req.params.id

        Category.findById(id).then(category => {
            let deleted = category.destroy()
            if (deleted) {
                object.message = "Data with id " +id+ " has been deleted!"
                res.send(object)
            }
        }).catch(error => {
            object.message = "Data with id " +id+ " does not exist!"
            object.error = true
            res.send(object)
        })
    }
}

module.exports = CategoryModel
const categoryDAO = require("../dao/category.dao");
const Category = require("../models/category.model");

exports.getAll = async() => {
    const rows = await categoryDAO.findAll();
    return rows.map(row => new Category(row));
}

exports.create = async(data) => {
    await categoryDAO.create(data);
}

exports.delete = async(id) => {
    return await categoryDAO.delete(id);
}

exports.update = async(id, data) => {
    return await categoryDAO.update(id, data);
}
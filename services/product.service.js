const productDAO = require("../dao/product.dao");
const Product = require("../models/product.model");

exports.getAll = async () => {
    const rows = await productDAO.findAll();
    return rows.map(row => new Product(row));
};

exports.create = async (data) => {
    await productDAO.create(data);
};

exports.delete = async (id) => {
    return await productDAO.delete(id);
};

exports.update = async (id, data) => {
    return await productDAO.update(id, data);
};

exports.patch = async (id, data) => {
    return await productDAO.patch(id, data);
};

const { json } = require("express");
const categoryService = require("../services/category.service");

exports.getAll = async(req, res) => {
    return res.json(await categoryService.getAll());
}

exports.create = async(req, res) => {
    await categoryService.create(req.body);
    res.status(201).json({message: "Category created successfully"});
}

exports.delete = async(req, res) => {
    const success = await categoryService.delete(req.params.id);
    if(!success) return res.status(400).json({message: "Category not found"});
    res.json({message: "Category deleted successfully"});
}

exports.update = async (req, res) => {
    const success = await categoryService.update(req.params.id, req.body);
    if(!success) return res.status(404).json({message: "Category not found"});
    res.json({message: "Category updated successfully"});
}

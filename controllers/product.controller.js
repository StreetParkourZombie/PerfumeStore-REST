const productService = require("../services/product.service");

exports.getAll = async (req, res) => {
    res.json(await productService.getAll());
};

exports.create = async (req, res) => {
    await productService.create(req.body);
    res.status(201).json({ message: "Product created successfully" });
};

exports.delete = async (req, res) => {
    const success = await productService.delete(req.params.id);
    if (!success) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted successfully" });
};

exports.update = async (req, res) => {
    const success = await productService.update(req.params.id, req.body);
    if (!success) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product updated successfully" });
};

exports.patch = async (req, res) => {
    const success = await productService.patch(req.params.id, req.body);
    if (!success) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product updated successfully (PATCH)" });
};

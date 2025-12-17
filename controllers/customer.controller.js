const customerService = require("../services/customer.service");

exports.login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password are required"
        });
    }

    const customer = await customerService.login(email, password);

    if (!customer) {
        return res.status(401).json({
            message: "Invalid email or password"
        });
    }

    res.json({
        message: "Login successfully",
        data: customer
    });
};

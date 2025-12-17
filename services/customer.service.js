const customerDAO = require("../dao/customer.dao");
const Customer = require("../models/customer.model");

const bcrypt = require("bcrypt");

exports.login = async (email, password) => {
    const data = await customerDAO.login(email);

    if (!data){
        throw new Error("INVALID CREDENTIALS");
    }

    const isMatch = await bcrypt.compare(password, data.PasswordHash);

    if (!isMatch){
        throw new Error("INVALID CREDENTIALS");
    }

    return new Customer(data);
};

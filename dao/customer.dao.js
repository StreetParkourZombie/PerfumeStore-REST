const { sql, poolPromise } = require("../config/db");

exports.login = async (email) => {
    const pool = await poolPromise;

    const result = await pool.request()
        .input("Email", sql.VarChar, email)
        .query(`
            SELECT * FROM Customers WHERE Email = @Email
        `);

    return result.recordset[0]; // undefined nếu sai tài khoản
};

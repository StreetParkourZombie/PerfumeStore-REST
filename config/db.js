const sql = require("mssql");

const config = {
    user: "perfumestore",
    password: "@Password123",
    server: "den1.mssql8.gear.host",
    database: "perfumestore",
    options: {
        trustServerCertificate: true
    }
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log("Connected to SQL Server");
        return pool;
    })
    .catch(err => {
        console.error("DB connection failed", err);
        throw err;
    });

module.exports = {
    sql,
    poolPromise
};

const sql = require("mssql");

const config = {
    user: "sa",
    password: "@Password123",
    server: "MSI\\SERVER1",
    database: "PerfumeStore",
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

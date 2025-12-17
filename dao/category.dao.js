const { Int } = require("mssql");
const {sql, poolPromise} = require("../config/db");

exports.findAll = async() => {
    const pool = await poolPromise;
    const result = await pool.request().query("SELECT * FROM Categories");
    return result.recordset;
}

exports.create = async(data) => {
    const pool = await poolPromise;

    const existed = await pool.request()
        .input("CategoryName", sql.NVarChar, data.CategoryName)
        .query("SELECT 1 FROM Categories WHERE CategoryName = @CategoryName");
    
    if (existed.recordset.length > 0){
        throw new Error ("CATEGORY EXISTED");
    }

    await pool.request()
        .input("CategoryName", sql.NVarChar, data.CategoryName)
        .query(`
                INSERT INTO Categories (CategoryName)
                VALUES (@CategoryName)
        `);
}

exports.delete = async(id) => {
    const pool = await poolPromise;

    const result = await pool.request()
        .input("CategoryID", sql.Int, id)
        .query(`
            DELETE FROM Categories
            WHERE CategoryID = @CategoryID
        `)

    return result.rowsAffected[0] > 0;
}

exports.update = async(id, data) => {
    const pool = await poolPromise;

    const existed = await pool.request()
        .input("CategoryName", sql.NVarChar, data.CategoryName)
        .query("SELECT 1 FROM Categories WHERE CategoryName = N'@CategoryName'");
    
    if (existed.recordset.length > 0){
        throw new Error ("CATEGORY EXISTED");
    }

    const result = await pool.request()
        .input("CategoryID", sql.Int, id)
        .input("CategoryName", sql.NVarChar, data.CategoryName)
        .query(`
            UPDATE Categories
            SET
            CategoryName = @CategoryName
            WHERE CategoryID = @CategoryID
        `);

    return result.rowsAffected[0] > 0
}

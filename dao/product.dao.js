const { sql, poolPromise } = require("../config/db");

exports.findAll = async () => {
    const pool = await poolPromise;
    const result = await pool.request().query("SELECT * FROM Products");
    return result.recordset;
};

exports.create = async (data) => {
    const pool = await poolPromise;

    await pool.request()
        .input("ProductName", sql.NVarChar, data.ProductName)
        .input("SuggestionName", sql.NVarChar, data.SuggestionName)
        .input("Price", sql.Decimal(18, 0), data.Price)
        .input("Origin", sql.NVarChar, data.Origin)
        .input("ReleaseYear", sql.Int, data.ReleaseYear)
        .input("Concentration", sql.NVarChar, data.Concentration)
        .input("Craftsman", sql.NVarChar, data.Craftsman)
        .input("Style", sql.NVarChar, data.Style)
        .input("UsingOccasion", sql.NVarChar, data.UsingOccasion)
        .input("Stock", sql.Int, data.Stock)
        .input("TopNote", sql.NVarChar, data.TopNote)
        .input("HeartNote", sql.NVarChar, data.HeartNote)
        .input("BaseNote", sql.NVarChar, data.BaseNote)
        .input("DiscountPrice", sql.Decimal(18, 0), data.DiscountPrice)
        .input("IsPublished", sql.Bit, data.IsPublished)
        .input("WarrantyPeriodMonths", sql.Int, data.WarrantyPeriodMonths)
        .input("Scent", sql.NVarChar, data.Scent)
        .input("BrandID", sql.Int, data.BrandID)
        .input("DiscountID", sql.Int, data.DiscountID)
        .input("Introduction", sql.NVarChar, data.Introduction)
        .input("DescriptionNO1", sql.NVarChar, data.DescriptionNO1)
        .input("DescriptionNO2", sql.NVarChar, data.DescriptionNO2)
        .query(`
            insert into Products (
                ProductName, SuggestionName, Price, Origin, ReleaseYear,
                Concentration, Craftsman, Style, UsingOccasion, Stock,
                TopNote, HeartNote, BaseNote, DiscountPrice, IsPublished,
                WarrantyPeriodMonths, Scent, BrandID, DiscountID,
                Introduction, DescriptionNO1, DescriptionNO2
            ) values (
                @ProductName, @SuggestionName, @Price, @Origin, @ReleaseYear,
                @Concentration, @Craftsman, @Style, @UsingOccasion, @Stock,
                @TopNote, @HeartNote, @BaseNote, @DiscountPrice, @IsPublished,
                @WarrantyPeriodMonths, @Scent, @BrandID, @DiscountID,
                @Introduction, @DescriptionNO1, @DescriptionNO2
            )
        `);
};

exports.delete = async (id) => {
    const pool = await poolPromise;
    const result = await pool.request()
        .input("ProductID", sql.Int, id)
        .query("delete from Products where ProductID = @ProductID");
    return result.rowsAffected[0] > 0;
};

exports.update = async (id, data) => {
    const pool = await poolPromise;
    const result = await pool.request()
        .input("ProductID", sql.Int, id)
        .input("ProductName", sql.NVarChar, data.ProductName)
        .input("SuggestionName", sql.NVarChar, data.SuggestionName)
        .input("Price", sql.Decimal(18, 0), data.Price)
        .input("Origin", sql.NVarChar, data.Origin)
        .input("ReleaseYear", sql.Int, data.ReleaseYear)
        .input("Concentration", sql.NVarChar, data.Concentration)
        .input("Craftsman", sql.NVarChar, data.Craftsman)
        .input("Style", sql.NVarChar, data.Style)
        .input("UsingOccasion", sql.NVarChar, data.UsingOccasion)
        .input("Stock", sql.Int, data.Stock)
        .input("TopNote", sql.NVarChar, data.TopNote)
        .input("HeartNote", sql.NVarChar, data.HeartNote)
        .input("BaseNote", sql.NVarChar, data.BaseNote)
        .input("DiscountPrice", sql.Decimal(18, 0), data.DiscountPrice)
        .input("IsPublished", sql.Bit, data.IsPublished)
        .input("WarrantyPeriodMonths", sql.Int, data.WarrantyPeriodMonths)
        .input("Scent", sql.NVarChar, data.Scent)
        .input("BrandID", sql.Int, data.BrandID)
        .input("DiscountID", sql.Int, data.DiscountID)
        .input("Introduction", sql.NVarChar, data.Introduction)
        .input("DescriptionNO1", sql.NVarChar, data.DescriptionNO1)
        .input("DescriptionNO2", sql.NVarChar, data.DescriptionNO2)
        .query(`
            update Products set
                ProductName = @ProductName,
                SuggestionName = @SuggestionName,
                Price = @Price,
                Origin = @Origin,
                ReleaseYear = @ReleaseYear,
                Concentration = @Concentration,
                Craftsman = @Craftsman,
                Style = @Style,
                UsingOccasion = @UsingOccasion,
                Stock = @Stock,
                TopNote = @TopNote,
                HeartNote = @HeartNote,
                BaseNote = @BaseNote,
                DiscountPrice = @DiscountPrice,
                IsPublished = @IsPublished,
                WarrantyPeriodMonths = @WarrantyPeriodMonths,
                Scent = @Scent,
                BrandID = @BrandID,
                DiscountID = @DiscountID,
                Introduction = @Introduction,
                DescriptionNO1 = @DescriptionNO1,
                DescriptionNO2 = @DescriptionNO2
            where ProductID = @ProductID
        `);

    return result.rowsAffected[0] > 0;
};

exports.patch = async (id, fields) => {
    const pool = await poolPromise;
    const request = pool.request();
    request.input("ProductID", sql.Int, id);

    const setClauses = [];
    for (const key in fields) {
        setClauses.push(`${key} = @${key}`);
        request.input(key, fields[key]);
    }

    if (setClauses.length === 0) return false;

    const result = await request.query(`
        update Products
        set ${setClauses.join(", ")}
        where ProductID = @ProductID
    `);

    return result.rowsAffected[0] > 0;
};

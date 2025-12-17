class Product {
    constructor(data){
        this.ProductID = data.ProductID,
        this.ProductName = data.ProductName,
        this.SuggestionName = data.SuggestionName,
        this.Price = data.Price,
        this.Origin = data.Origin,
        this.ReleaseYear = data.ReleaseYear,
        this.Concentration = data.Concentration,
        this.Craftsman = data.Craftsman,
        this.Style = data.Style,
        this.usingOccasion = data.usingOccasion,
        this.Stock = data.Stock,
        this.TopNote = data.TopNote,
        this.HeartNote = data.HeartNote,
        this.BaseNote = data.BaseNote,
        this.DiscountPrice = data.DiscountPrice,
        this.IsPublished = data.IsPublished,
        this.WarrantyPeriodMonths = data.WarrantyPeriodMonths,
        this.Scent = data.Scent,
        this.BrandID = data.BrandID,
        this.DiscountID = data.DiscountID,
        this.Introduction = data.Introduction,
        this.DescriptionNO1 = data.DescriptionNO1,
        this.DescriptionNO2 = data.DescriptionNO2
    }
}

module.exports = Product;
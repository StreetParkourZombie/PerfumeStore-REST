const express = require("express");
const productRoutes = require("./routes/product.routes");
const customerRoutes = require("./routes/customer.route");
const categoryRoutes = require("./routes/category.route");

const app = express();
app.use(express.json());

app.use("/Products", productRoutes);
app.use("/Customers", customerRoutes)
app.use("/Categories", categoryRoutes);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

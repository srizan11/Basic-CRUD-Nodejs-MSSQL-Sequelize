const express = require("express");
const bodyParser = require("body-parser");
const customerRoutes = require("./routes/customerRoutes");
const orderRoutes = require("./routes/orderRoutes");
const sequelize = require('./util/database');  // Add sequelize import
const Customer = require('./models/customer');  // Add Customer model import

const app = express();

// Middleware: Body parser to parse incoming JSON requests
app.use(bodyParser.json());

// Root route (this is what you'll see when visiting http://localhost:3000/)
app.get('/', (req, res) => {
  res.send('Welcome to the server!');
});

// API routes
app.use("/api/customers", customerRoutes);
app.use("/api/orders", orderRoutes);

// Sync database
sequelize.sync({ force: true })  // Use { force: true } to drop and recreate the tables (use in development)
  .then(() => {
    console.log("Database synced");

    // Start the server after syncing the database
    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

const express = require("express");
const {
  createOrder,
  getOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");

const router = express.Router();

router.post("/", createOrder);          // Create an order
router.get("/", getOrders);            // Get all orders
router.put("/:id", updateOrder);       // Update an order by ID
router.delete("/:id", deleteOrder);    // Delete an order by ID

module.exports = router;

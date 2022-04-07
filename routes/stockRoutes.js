const express = require("express");
const stockController = require("../controllers/stockController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Protect all routes after this middleware
router.use(authMiddleware.protect);
router
  .route("/")
  .get(stockController.getStocks)
  .post(stockController.createStock);

module.exports = router;

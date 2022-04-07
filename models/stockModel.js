const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
  },
  avgPrice: {
    type: Number,
    default: 0,
  },
  quantity: {
    type: Number,
    default: 0,
  },
  note: {
    type: String,
  },
  userId: {
    type: String,
    required: true,
  },
  lots: [
    {
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      note: {
        type: String,
      },
    },
  ],
});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;

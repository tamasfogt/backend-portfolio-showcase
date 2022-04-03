const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: true,
  },
  avgPrice: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  note: {
    type: String,
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

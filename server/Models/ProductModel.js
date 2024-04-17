const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    price: {
      type: Number,
      required: true,
    },
    offer: {
      type: Number,
      required: false,
      default: 0,
    },
    image: {
      type: String,
      required: false,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Products", ProductSchema);

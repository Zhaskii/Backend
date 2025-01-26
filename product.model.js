import mongoose from "mongoose";

// set rule/schema/structure
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, //* "    nepal country   " => "nepal country"
    maxlength: 255, //* characters eg: "a b" => 3 characters
  },
  brand: {
    type: String,
    required: true,
    trim: true,
    maxlength: 255,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  category: {
    type: String,
    required: true,
    trim: true,
    enum: [
      "grocery",
      "clothing",
      "kids",
      "stationery",
      "kitchen",
      "furniture",
      "electronics",
      "electrical",
      "sports",
    ],
  },
  image: {
    type: String,
    required: false,
    nullable: true, //* null(0) value halna paune
  },
  freeShipping: {
    type: Boolean,
    required: false,
    default: false, //* user le kei na halera submit garyo bhane false jancha
  },
  description: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 1000,
  },
  //  sellerId: mongoose.ObjectId,
});

// create table
const ProductTable = mongoose.model("Product", productSchema);

export default ProductTable;

import mongoose, { Schema } from "mongoose";
const proSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 5,
    },
    description: {
      type: String,
      minLength: 5,
    },
    price: {
      type: Number,
      required: true,
    },
    discountPercentage: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    images: [String],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export const Products = mongoose.model("Product", proSchema);

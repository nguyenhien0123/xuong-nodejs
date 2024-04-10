import mongoose, { Schema } from "mongoose";

const CartItemSchema = mongoose.Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export default CartItemSchema;

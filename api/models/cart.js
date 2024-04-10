import mongoose, { Schema } from "mongoose";
import CartItemSchema from "./cart-item.js";

const CartSchema = mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [CartItemSchema],
});
export default mongoose.model("Cart", CartSchema);

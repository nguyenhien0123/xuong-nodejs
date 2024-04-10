import mongoose, { Schema } from "mongoose";
const ctegorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      defaultValue: "Uncategorized",
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      defaultValue: "Uncategorized",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export default mongoose.model("Category", ctegorySchema);

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.URI_DB);
    console.log(`connect is succsessful`);
  } catch (error) {
    console.log(`can not is connect ${error}`);
  }
};
export default connect;

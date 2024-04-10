import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.js";
dotenv.config();
const SECRET_CODE = process.env.SECRET_CODE;

export const checkPermisson = async (req, res, next) => {
  try {
    //Buoc 1 : Kiem tra nguoi dung dang nhap hay chua
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      //buoc 2:Kiem tra token
      return res.status(401).json({ messages: "Ban chua co quyen truy cap" });
    }
    //Buoc 3:Kiem tra quyen truy cap cua nguoi dung
    const decoded = jwt.verify(token, SECRET_CODE);
    const user = await User.findById(decoded._id);
    if (!user) {
      return res.status(404).json({ messages: "token loi" });
    }
    if (user.role !== "admin") {
      return res.status(401).json({ messages: "Ban ko co quyen truy cap" });
    }
    //buoc 4:Next
    next();
  } catch (error) {
    return res.status(500).json({ messages: error.messages });
  }
};

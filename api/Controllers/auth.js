import { signINValidator, signUpValidator } from "../Validation/user.js";
import User from "../models/user.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const SECRET_CODE = process.env.SECRET_CODE;
export const signUp = async (req, res) => {
  try {
    // B1:Validate du lieu
    const { error } = signUpValidator.validate(req.body, { ebortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(500).json({ messages: errors });
    }
    //  B2: Kiem tra xem email da ton tai hay chua
    const emailExits = await User.findOne({ email: req.body.email });
    if (emailExits) {
      return res.status(500).json({ messages: "Email nay da ton tai" });
    }
    // B3: Ma hoa mat khau
    const hashedPassword = await bcryptjs.hash(req.body.password, 10);
    //B4:Khoi tao User DB
    const user = await User.create({ ...req.body, password: hashedPassword });
    const accessToken = jwt.sign({ _id: user._id }, SECRET_CODE);

    //Xoa mat khau
    user.password = undefined;
    return res
      .status(200)
      .json({ message: "Dang ky thanh cong", user, accessToken });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.name, messages: error.messages });
  }
};
export const getUser = async (req, res) => {
  try {
    const user = await User.find();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ messages: error.messages });
  }
};
export const getUsered = async (req, res) => {
  try {
    const user = await User.find();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ messages: error.messages });
  }
};
export const SignIn = async (req, res) => {
  try {
    //b1:Validate du lieu
    const { error } = await signINValidator.validate(req.body, {
      ebortEarly: false,
    });
    if (error) {
      const erros = error.details.map((err) => err.message);
      return res.status(500).json({ message: erros });
    }
    //b2: Kiem tra xem email da ton tai hay chua
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(500).json({ message: "Email nay chua duoc dang ki" });
    }

    //b3: kiem tra password
    const isMatch = await bcryptjs.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(500).json({ message: "Mat khau khong dung" });
    }
    // b4: tao JWT
    const accessToken = jwt.sign({ _id: user._id }, SECRET_CODE);
    console.log(accessToken);
    //   xoa mat khau
    user.password = undefined;
    //b6: thong bao cho nguoi dung
    return res
      .status(200)
      .json({ message: "Dang nhap thanh cong", user, accessToken });
  } catch (error) {
    return res
      .status(500)
      .status({ error: error.name, message: error.message });
  }
};

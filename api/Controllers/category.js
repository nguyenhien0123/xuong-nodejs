import { categoryValidate } from "../Validation/category.js";
import Category from "../models/category.js";

export const create = async (req, res) => {
  try {
    const { error } = categoryValidate.validate(req.body);
    if (error) {
      return res.status(404).json({ messages: error.details[0].message });
    }
    const category = await Category.create(req.body);
    return res.json(category);
  } catch (error) {
    console.log(error);
    return res.status(404);
  }
};
export const getAll = async (req, res) => {
  try {
    const categorys = await Category.find();
    if (!categorys) {
      return res.json(categorys);
    }
    return res.json(categorys);
  } catch (error) {
    console.status(404);
  }
};
export const getDetail = async (req, res) => {
  try {
    const id = req.params.id;
    const category = await Category.findById({ _id: id });
    if (!category) {
      return res.json({ message: "Khong the lay chi tiet sach san pham" });
    }
    return res.json(category);
  } catch (error) {
    console.log(error);
    console.status(404);
  }
};
export const upDate = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id);
    return res.json(category);
  } catch (error) {
    console.status(404);
  }
};
export const dele = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    return res.json(category);
  } catch (error) {
    console.status(404);
  }
};

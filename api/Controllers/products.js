import { proValidate } from "../Validation/product.js";
import Category from "../models/category.js";
import { Products } from "../models/product.js";

export const create = async (req, res) => {
  try {
    const { error } = proValidate.validate(req.body);
    if (error) {
      return res.status(404).json({ messages: error.details[0].message });
    }
    const category = await Category.findById(req.body.category);
    const product = await Products.create({
      ...req.body,
      category: category._id,
    });
    if (!product) {
      return res.json({ messages: "Them san pham ko thanh cong" });
    }
    return res.json({ messages: "Them san pham thanh cong", datas: product });
  } catch (error) {
    return res.status(500).json({ messages: error.message });
  }
};
export const getAll = async (req, res) => {
  try {
    const products = await Products.find().populate("category").exec();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ messages: error.messages });
  }
};
export const cateProduct = async (req, res) => {
  const category = await Category.findOne({ slug: req.query.category });

  if (category) {
    const products = await Products.find()
      .where({ category: category._id })
      .populate("category")
      .exec();
    return res.status(200).json(products);
  } else {
    return res.status(404).json({ message: "Category not found" });
  }
};
export const getDetail = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Products.findById({ _id: id });
    if (!product) {
      return res.send({ messages: "Khong tim thay san pham" });
    } else {
      return res.send(product);
    }
  } catch (error) {
    return res.status(500).json({ messages: error.message });
  }
};

export const proDele = async (req, res) => {
  const id = req.params.id;
  const response = await Products.findOneAndDelete({ _id: id });
  res.send(response);
};
export const proUpdate = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const response = await Products.findOneAndUpdate({ _id: id }, body, {
    new: true,
  });
  res.send(response);
};

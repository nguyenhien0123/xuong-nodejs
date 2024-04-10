import express from "express";
import Category from "../models/category.js";
import {
  create,
  dele,
  getAll,
  getDetail,
  upDate,
} from "../Controllers/category.js";
const routerCategory = express.Router();
routerCategory.post("/", create);
routerCategory.get("/", getAll);
routerCategory.get("/:id", getDetail);
routerCategory.delete("/:id", dele);
routerCategory.put("/:id", upDate);
export default routerCategory;

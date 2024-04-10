import express, { Router } from "express";
import {
  create,
  getAll,
  getDetail,
  proDele,
  cateProduct,
  proUpdate,
} from "../Controllers/products.js";
import { checkPermisson } from "../middlewares/checkPermission.js";
const routerPro = express.Router();
routerPro.get("/", getAll);
routerPro.get("/search", cateProduct);
routerPro.post("/", checkPermisson, create);
routerPro.get("/:id", getDetail);
routerPro.delete("/:id", checkPermisson, proDele);
routerPro.put("/:id", proUpdate);

export default routerPro;

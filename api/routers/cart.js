import express from "express";
import { addToCart, getCartByUser } from "../Controllers/cart.js";

const routerCart = express.Router();

routerCart.get("/:userId/cart", getCartByUser);
routerCart.post("/:userId/cart", addToCart);

export default routerCart;

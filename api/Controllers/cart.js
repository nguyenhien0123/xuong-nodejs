import Cart from "../models/cart.js";

export const getCartByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const cart = await Cart.findOne({ user: userId }).populate("items.product");
    return res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something wrong :(" });
  }
};

export const addToCart = async (req, res) => {
  try {
    const { userId } = req.params;
    const { product, quantity } = req.body;

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({ user: userId, items: [] });
    }

    const exitsPro = await cart.items.findIndex(
      (item) => item.product.toString() == product
    );

    if (exitsPro !== -1) {
      cart.items[exitsPro].quantity += quantity;
    } else {
      cart.items.push({ product, quantity });
    }
    await cart.save();
    return res.status(201).json({ cart });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something wrong :(" });
  }
};

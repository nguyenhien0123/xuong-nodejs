import Joi from "joi";

export const proValidate = Joi.object({
  title: Joi.string().required().min(5).empty(),
  description: Joi.string().required().min(5),
  price: Joi.number().required(),
  discountPercentage: Joi.number().required(),
  rating: Joi.number().required(),
  stock: Joi.number().required(),
  brand: Joi.string().required(),
  category: Joi.string().required(),
  thumbnail: Joi.string().required(),
  images: Joi.array().items(Joi.string().uri()),
}).options({ stripUnknown: true });

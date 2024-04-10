import Joi from "joi";

export const categoryValidate = Joi.object({
  name: Joi.string().required().min(2).max(255),
  slug: Joi.string().required().min(2).max(255),
});

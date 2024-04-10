import Joi from "joi";
export const signUpValidator = Joi.object({
  username: Joi.string().required().min(6).max(255).messages({
    "string.empty": "userName khong duoc de trong",
    "any.required": "userName la bat buoc",
    "string.min": "username phai co it nhat {#limit} ky tu",
    "string.max": "username phai duoi {#limit + 1} ky tu",
  }),
  email: Joi.string().required().email().messages({
    "string.empty": "Email khong duoc de trong",
    "any.required": "Email la bat buoc",
    "string.email": "email ko dung dinh dang",
  }),
  password: Joi.string().required().min(6).max(255).messages({
    "string.empty": "password khong duoc de trong",
    "any.required": "password la bat buoc",
    "string.min": "password phai co it nhat {#limit} ky tu",
    "string.max": "password phai duoi {#limit + 1} ky tu",
  }),
  role: Joi.string(),
});
export const signINValidator = Joi.object({
  email: Joi.string().required().email().messages({
    "string.empty": "Email khong duoc de trong",
    "any.required": "Email la bat buoc",
    "string.email": "email ko dung dinh dang",
  }),
  password: Joi.string().required().min(6).max(255).messages({
    "string.empty": "password khong duoc de trong",
    "any.required": "password la bat buoc",
    "string.min": "password phai co it nhat {#limit} ky tu",
    "string.max": "password phai duoi {#limit + 1} ky tu",
  }),
});

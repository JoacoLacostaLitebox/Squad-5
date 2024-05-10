import Joi from "joi";

export const AddFukuPoints = Joi.object({
  fukupoints: Joi.number().required(),
  userId: Joi.string().required()
});

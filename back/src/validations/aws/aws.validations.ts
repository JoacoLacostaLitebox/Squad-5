import Joi from "joi";

export const GenerateSignedURLBody = Joi.object({
  extension: Joi.string().required(),
});

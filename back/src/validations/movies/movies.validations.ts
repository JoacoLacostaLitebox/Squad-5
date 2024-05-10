import Joi from "joi";

export const CreateMovieBody = Joi.object({
  title: Joi.string().required(),
  movieName: Joi.string().required(),
});

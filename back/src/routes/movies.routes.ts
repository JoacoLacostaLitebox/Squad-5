import express, { Router } from "express";
import moviesController from "../controllers/movies.controller";
import { validateRequest } from "../middlewares/validateRequest";
import { CreateMovieBody } from "../validations/movies/movies.validations";

const moviesRouter: Router = express.Router();

moviesRouter.get("/", moviesController.getAllMovies);
moviesRouter.post(
  "/uploadmovie",
  validateRequest(CreateMovieBody),
  moviesController.uploadMovie,
);

export default moviesRouter;

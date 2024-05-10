import { Request, Response } from "express";
import * as moviesService from "../services/movies.service";
import { MoviesMapper } from "../DTOs/mappers/moviesMapper";

const getAllMovies = async (req: Request, res: Response) => {
  const movieList = await moviesService.getAllMovies();
  res.status(200).json(new MoviesMapper().toMoviesResposeDTO(movieList));
};

const uploadMovie = async (req: Request, res: Response) => {
  const { title, movieName } = req.body;
  const movie = await moviesService.createMovie({
    title,
    imageUrl: `${process.env.AWS_IMAGES_BASE_URL}/${movieName}`,
  });
  res.status(200).json(new MoviesMapper().toMovieResponseDTO(movie));
};

export default {
  getAllMovies,
  uploadMovie,
};

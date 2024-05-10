import { Movie, MovieDoc } from "../interfaces/movie.interfaces";
import movieModel from "../models/movie";

export const createMovie = async (movieData: Movie): Promise<MovieDoc> => {
  return await movieModel.create(movieData);
};

export const getAllMovies = async (): Promise<MovieDoc[]> => {
  return await movieModel.find().sort({ _id: -1 });
};

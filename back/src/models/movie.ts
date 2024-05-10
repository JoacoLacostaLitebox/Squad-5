import { MovieModel, MovieDoc } from "../interfaces/movie.interfaces";
import mongoose from "mongoose";

const movieSchema = new mongoose.Schema<MovieDoc>(
  {
    title: String,
    imageUrl: String,
  },
  { timestamps: true },
);

const movieModel: MovieModel = mongoose.model<MovieDoc>("movie", movieSchema);

export default movieModel;

import { MovieDoc } from "../../interfaces/movie.interfaces";
import { MovieResponseDTO } from "../output/movieResponse.dto";

export class MoviesMapper {
  public toMovieResponseDTO(movie: MovieDoc): MovieResponseDTO {
    return new MovieResponseDTO(movie);
  }

  public toMoviesResposeDTO(movies: MovieDoc[]): MovieResponseDTO[] {
    return movies.map((movie) => new MovieResponseDTO(movie));
  }
}

interface IMoviePartial {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
}

interface IMovie extends IMoviePartial {
  Released: string;
  Runtime: string;
  Director: string;
  Genre: string;
  Country: string;
  Metascore: string;
}

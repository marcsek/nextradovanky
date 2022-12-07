import Link from 'next/link';
import React from 'react';

const movieSort = (a: IMoviePartial, b: IMoviePartial) => {
  if (a.Year < b.Year) return 1;
  return -1;
};

const SearchResults = ({ movies }: { movies: IMoviePartial[] }) => {
  return (
    <div>
      {movies.sort(movieSort).map((movie) => (
        <Link style={{ color: 'white' }} href={`/movies/${movie.imdbID}`} key={movie.imdbID}>
          <p>{movie.Title}</p>
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;

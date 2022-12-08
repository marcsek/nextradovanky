import Link from 'next/link';
import React from 'react';

const movieSort = (a: IMoviePartial, b: IMoviePartial) => {
  if (a.Year < b.Year) return 1;
  return -1;
};

const SearchResults = ({ movies }: { movies: IMoviePartial[] }) => {
  return (
    <div className="flex flex-col gap-2">
      {movies.sort(movieSort).map((movie) => (
        <Link
          className="text-neutral-100 hover:underline duration-500 decoration-blue-600 underline-offset-2"
          href={`/movies/${movie.imdbID}`}
          key={movie.imdbID}
        >
          <p>{movie.Title}</p>
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;

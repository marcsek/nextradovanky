'use client';

import React, { useCallback, useState } from 'react';
import MovieSearch from './(components)/MovieSearch';
import SearchResults from './(components)/SearchResults';

async function postMoviesSearch(search: string) {
  const searchData = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=b776e8c5`).then((res) => res.json());

  return searchData.Search as IMoviePartial[];
}

const MovieResultLayout = ({ children }: { children: React.ReactNode }) => {
  const [movies, setMovies] = useState<IMoviePartial[]>([]);

  const handleSearchSubmit = useCallback((search: string) => {
    postMoviesSearch(search).then((res) => setMovies(res ?? []));
  }, []);

  return (
    <div className="p-8 flex flex-col gap-8">
      <MovieSearch handleSearchSubmit={handleSearchSubmit} />
      <div className="flex gap-8">
        <div className="bg-neutral-800 p-8 rounded-2xl min-w-[420px]">
          <SearchResults movies={movies} />
        </div>
        <div className="flex flex-grow">{children}</div>
      </div>
    </div>
  );
};

export default MovieResultLayout;

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
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <MovieSearch handleSearchSubmit={handleSearchSubmit} />
      <div style={{ display: 'flex', gap: '2rem' }}>
        <div style={{ backgroundColor: '#232323', padding: '2rem', borderRadius: '1rem', minWidth: '420px' }}>
          <SearchResults movies={movies} />
        </div>
        <div style={{ display: 'flex', flex: '1' }}>{children}</div>
      </div>
    </div>
  );
};

export default MovieResultLayout;

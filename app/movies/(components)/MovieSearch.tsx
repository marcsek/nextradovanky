'use client';

import React, { useState } from 'react';

const MovieSearch = ({ handleSearchSubmit }: { handleSearchSubmit: (search: string) => void }) => {
  const [search, setSearch] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearchSubmit(search);
  };

  return (
    <div style={{ display: 'flex' }}>
      <form onSubmit={handleFormSubmit}>
        <input style={{ width: '320px' }} onChange={handleInput} value={search} />
        <button type="submit">Search Movie</button>
      </form>
    </div>
  );
};

export default MovieSearch;

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
    <div>
      <form className="flex gap-8" onSubmit={handleFormSubmit}>
        <input
          className="w-80 rounded-lg outline-zinc-300 focus:outline-none focus:ring-2 duration-75 focus:ring-slate-200 px-2"
          onChange={handleInput}
          value={search}
        />
        <button className="bg-blue-700 px-3 py-2 rounded-lg hover:bg-blue-600 duration-100 font-semibold " type="submit">
          Search Movie
        </button>
      </form>
    </div>
  );
};

export default MovieSearch;

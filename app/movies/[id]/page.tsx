import Link from 'next/link';
import React from 'react';

async function getMovieById(movieID: string) {
  console.log(`https://www.omdbapi.com/?i=${movieID}&apikey=b776e8c5`);
  const data = await fetch(`https://www.omdbapi.com/?i=${movieID}&apikey=b776e8c5`).then((res) => res.json());

  return data as IMovie;
}

const MovieDetail = async ({ params }: { params: { id: string } }) => {
  const movie = await getMovieById(params.id);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h3 style={{ margin: '0' }}>{`Title: ${movie.Title}`}</h3>
      <h3 style={{ margin: '0' }}>{`Year: ${movie.Year}`}</h3>
      <h3 style={{ margin: '0' }}>{`Director: ${movie.Director}`}</h3>
      <Link href="/movies">
        <p style={{ alignSelf: 'flex-end' }}>X</p>
      </Link>
    </div>
  );
};

export default MovieDetail;

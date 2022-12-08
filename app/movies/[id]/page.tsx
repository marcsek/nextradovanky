import Image from 'next/image';
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
    <div className="flex flex-col gap-4">
      <h3 className="m-0">{`Title: ${movie.Title}`}</h3>
      <h3 className="m-0">{`Year: ${movie.Year}`}</h3>
      <h3 className="m-0">{`Director: ${movie.Director}`}</h3>
      <div className="h-[200px] w-[200px] relative rounded-2xl overflow-hidden drop-shadow-lg drop-shadow-black">
        <Image style={{ objectFit: 'cover' }} src={movie.Poster} alt="Movie Poster" fill={true}></Image>
      </div>
      <Link href="/movies">
        <p className="self-end">X</p>
      </Link>
    </div>
  );
};

export default MovieDetail;

import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_KEY = '6e17ff225f02e05661d0fb89e3b2e351';
const MOVIE_DETAILS_URL = `https://api.themoviedb.org/3/movie`;
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';  // URL de bază pentru imagini

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    axios
      .get(`${MOVIE_DETAILS_URL}/${movieId}?api_key=${API_KEY}`)
      .then(response => setMovie(response.data))
      .catch(error => console.error("Error fetching movie details:", error));
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <button onClick={handleGoBack}>Go Back</button>

      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>

      {movie.poster_path && (
        <img
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={`${movie.title} poster`}
          width="300"
        />
      )}

      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
}

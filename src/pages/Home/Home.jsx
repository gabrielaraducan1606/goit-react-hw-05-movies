import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_KEY = '6e17ff225f02e05661d0fb89e3b2e351';
const TRENDING_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(TRENDING_URL)
      .then(response => setMovies(response.data.results))
      .catch(error => console.error("Error fetching trending movies:", error));
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

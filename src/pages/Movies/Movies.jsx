import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const API_KEY = '6e17ff225f02e05661d0fb89e3b2e351';
const SEARCH_MOVIES_URL = `https://api.themoviedb.org/3/search/movie`;

export default function Movies() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') || '';

  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value.trim();
    if (!query) return;
    setSearchParams({ query }); 
    fetchMovies(query);
  };

  const fetchMovies = (query) => {
    axios
      .get(`${SEARCH_MOVIES_URL}?api_key=${API_KEY}&query=${query}`)
      .then((response) => setSearchResults(response.data.results))
      .catch((error) => console.error('Error fetching search results:', error));
  };

  React.useEffect(() => {
    if (searchQuery) fetchMovies(searchQuery);
  }, [searchQuery]);

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input type="text" name="query" defaultValue={searchQuery} placeholder="Search movies..." />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchResults.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

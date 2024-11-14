import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_KEY = '6e17ff225f02e05661d0fb89e3b2e351';
const MOVIE_CREDITS_URL = `https://api.themoviedb.org/3/movie`;
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200';  // URL de bază pentru imagini

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    axios
      .get(`${MOVIE_CREDITS_URL}/${movieId}/credits?api_key=${API_KEY}`)
      .then(response => setCast(response.data.cast))
      .catch(error => console.error("Error fetching cast data:", error));
  }, [movieId]);

  if (cast.length === 0) return <div>No cast information available.</div>;

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.cast_id}>
            {actor.profile_path ? (
              <img
                src={`${IMAGE_BASE_URL}${actor.profile_path}`}
                alt={actor.name}
                width="100"
              />
            ) : (
              <p>No image available</p>
            )}
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useNavigate} from 'react-router-dom';
import axios from 'axios';
import styles from './MovieDetails.module.css';

const API_KEY = '6e17ff225f02e05661d0fb89e3b2e351';
const MOVIE_DETAILS_URL = `https://api.themoviedb.org/3/movie`;
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

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
      .then((response) => setMovie(response.data))
      .catch((error) => console.error('Error fetching movie details:', error));
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <button onClick={handleGoBack}>Go Back</button>

      <div>
       <ul className={styles.ul}>
       <li><img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} style={{ maxWidth: '300px' }} /></li>
        <li><h1>{movie.title} ({movie.release_date.split('-')[0]})</h1>
        <p><strong>User Score:</strong> {Math.round(movie.vote_average * 10)}%</p>
        <p><strong>Overview:</strong> {movie.overview}</p>
        <p><strong>Genres:</strong> {movie.genres.map((genre) => genre.name).join(', ')}</p></li>
        </ul>
      </div>

      <div>
        
        <p>Additional Information</p>
        <ul className={styles.castList}>
          <li>
            <Link to={`cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`reviews`}>Reviews</Link>
          </li>
        </ul>
       
        <Outlet />
      </div>
    </div>
  );
}

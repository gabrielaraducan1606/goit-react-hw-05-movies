import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_KEY = '6e17ff225f02e05661d0fb89e3b2e351';
const MOVIE_REVIEWS_URL = `https://api.themoviedb.org/3/movie`;

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(`${MOVIE_REVIEWS_URL}/${movieId}/reviews?api_key=${API_KEY}`)
      .then((response) => setReviews(response.data.results))
      .catch((error) => console.error('Error fetching reviews:', error));
  }, [movieId]);

  return (
    <div>
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p><strong>{review.author}</strong></p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

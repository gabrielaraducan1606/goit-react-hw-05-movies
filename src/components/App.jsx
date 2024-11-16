import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import styles from './App.module.css';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MoviesDetails/MoviesDetails'));
const Cast = lazy(() => import('../pages/MoviesDetails/components/Cast'));
const Reviews = lazy(() => import('../pages/MoviesDetails/components/Reviews'));

function App() {
  return (
    <Router>
     
      <nav className={styles.nav}>
        <Link to="/" >
          <button className={styles.button}>Home</button>
        </Link>
        <Link to="/movies">
          <button className={styles.button}>Movies</button>
        </Link>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
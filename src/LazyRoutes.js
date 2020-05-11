import { lazy } from 'react';

const HomePage = lazy(() => import('./features/home/pages/HomePage'));
const MoviesPage = lazy(() => import('./features/movies/pages/MoviesPage'));
const TvShowsPage = lazy(() => import('./features/tv-shows/pages/TvShowsPage'));
const AboutPage = lazy(() => import('./features/about/pages/AboutPage'));

const LazyRoutes = {
  HomePage,
  MoviesPage,
  TvShowsPage,
  AboutPage,
};

export default LazyRoutes;

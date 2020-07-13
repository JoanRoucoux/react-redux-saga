import { lazy } from 'react';

const AboutPage = lazy(() => import('./features/about/pages/AboutPage'));
const HomePage = lazy(() => import('./features/home/pages/HomePage'));
const MoviesPage = lazy(() => import('./features/movies/pages/MoviesPage'));
const NotFoundComponent = lazy(() => import('./features/commons/components/not-found-view/NotFoundView'));
const PeoplePage = lazy(() => import('./features/people/pages/PeoplePage'));
const TvShowsPage = lazy(() => import('./features/tv-shows/pages/TvShowsPage'));

const LazyRoutes = {
  AboutPage,
  HomePage,
  MoviesPage,
  NotFoundComponent,
  PeoplePage,
  TvShowsPage,
};

export default LazyRoutes;

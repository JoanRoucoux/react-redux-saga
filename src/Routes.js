import React, { Suspense } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { Path } from './settings';
import LazyRoutes from './LazyRoutes';

const {
  HOME_PAGE,
  MOVIES_PAGE,
  TV_SHOWS_PAGE,
  ABOUT_PAGE,
} = Path;

const {
  HomePage,
  MoviesPage,
  TvShowsPage,
  AboutPage,
} = LazyRoutes;

const Routes = () => (
  <Suspense fallback={<div />}>
    <Router>
      <Switch>
        <Route path={HOME_PAGE} component={HomePage} />
        <Route path={MOVIES_PAGE} component={MoviesPage} />
        <Route path={TV_SHOWS_PAGE} component={TvShowsPage} />
        <Route path={ABOUT_PAGE} component={AboutPage} />
        <Redirect from="/" to={HomePage} />
      </Switch>
    </Router>
  </Suspense>
);

export default Routes;

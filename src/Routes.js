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
  ABOUT_PAGE,
  HOME_DEFAULT_PATH,
  HOME_PATH,
  MOVIES_PAGE,
  NOT_FOUND_PAGE,
  PEOPLE_PAGE,
  TV_SHOWS_PAGE,
} = Path;

const {
  AboutPage,
  HomePage,
  MoviesPage,
  NotFoundComponent,
  PeoplePage,
  TvShowsPage,
} = LazyRoutes;

const Routes = () => (
  <Suspense fallback={<div />}>
    <Router>
      <Switch>
        <Route path={ABOUT_PAGE} component={AboutPage} />
        <Route exact path={HOME_DEFAULT_PATH}>
          <Redirect to={HOME_PATH} />
        </Route>
        <Route path={HOME_PATH} component={HomePage} />
        <Route path={MOVIES_PAGE} component={MoviesPage} />
        <Route path={NOT_FOUND_PAGE} component={NotFoundComponent} />
        <Route path={PEOPLE_PAGE} component={PeoplePage} />
        <Route path={TV_SHOWS_PAGE} component={TvShowsPage} />
        <Redirect to={NOT_FOUND_PAGE} />
      </Switch>
    </Router>
  </Suspense>
);

export default Routes;

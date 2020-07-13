import AboutPaths from './AboutPath';
import HomePaths from './HomePath';
import MoviesPaths from './MoviesPath';
import NotFoundPaths from './NotFoundPath';
import PeoplePaths from './PeoplePath';
import TvShowsPaths from './TvShowsPath';

const Path = {
  ...AboutPaths,
  ...HomePaths,
  ...MoviesPaths,
  ...NotFoundPaths,
  ...PeoplePaths,
  ...TvShowsPaths,
};

export default Path;

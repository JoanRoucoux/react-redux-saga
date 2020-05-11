import HomePaths from './HomePath';
import MoviesPaths from './MoviesPath';
import TvShowsPaths from './TvShowsPath';
import AboutPaths from './AboutPath';

const Path = {
  ...HomePaths,
  ...MoviesPaths,
  ...TvShowsPaths,
  ...AboutPaths,
};

export default Path;

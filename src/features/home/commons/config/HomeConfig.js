import { FPUtils } from '../../../../core';

const {
  isDefined,
} = FPUtils;

/**
 * Format home media
 *
 * @param media
 * @returns {formatted media}
 */
const formatMediaList = (mediaList) => {
  if (isDefined(mediaList)) {
    // Because it is coming from the API,
    // we cannot do anything about the camelcase
    /* eslint-disable camelcase */
    return mediaList.map((media) => {
      const {
        name,
        poster_path,
        title,
        vote_average,
      } = media || {};
      return {
        posterPath: `https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`,
        title: title || name,
        voteAverage: vote_average.toFixed(1),
      };
    });
  }
  return null;
};

const HomeConfig = {
  formatMediaList,
};

export default HomeConfig;

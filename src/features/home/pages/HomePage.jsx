import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppLogger,
  Reduxify,
} from '../../../core';
import {
  CommunityView,
  MediaSection,
  SearchView,
} from '../components';
import {
  HomeDispatcher,
  HomeProvider,
} from '../redux';

const {
  HomePopularMoviesFragment,
  HomePopularTvShowsFragment,
  HomeTrendingTodayFragment,
} = HomeProvider;

@Reduxify((state) => ({
  // define state to extract
  ...HomePopularMoviesFragment(state),
  ...HomePopularTvShowsFragment(state),
  ...HomeTrendingTodayFragment(state),
}), {
  // define actions to execute
  ...HomeDispatcher,
})
class HomePage extends Component {
  // propsType (validation)
  static propTypes = {
    popularMovies: PropTypes.any,
    popularMoviesLoading: PropTypes.bool,
    popularMoviesError: PropTypes.string,
    requestPopularMovies: PropTypes.func,
    popularTvShows: PropTypes.any,
    popularTvShowsLoading: PropTypes.bool,
    popularTvShowsError: PropTypes.string,
    requestPopularTvShows: PropTypes.func,
    trendingToday: PropTypes.any,
    trendingTodayLoading: PropTypes.bool,
    trendingTodayError: PropTypes.any,
    requestTrendingToday: PropTypes.func,
  };

  // default props
  static defaultProps = {
    popularMovies: null,
    popularMoviesLoading: false,
    popularMoviesError: null,
    requestPopularMovies: null,
    popularTvShows: null,
    popularTvShowsLoading: false,
    popularTvShowsError: null,
    requestPopularTvShows: null,
    trendingToday: null,
    trendingTodayLoading: false,
    trendingTodayError: null,
    requestTrendingToday: null,
  };

  // initial state
  state = {};

  // did mount staff
  componentDidMount() {
    this.initPage();
  }

  initPage = () => {
    const {
      requestPopularMovies,
      requestPopularTvShows,
      requestTrendingToday,
    } = this.props;
    requestPopularMovies();
    requestPopularTvShows();
    requestTrendingToday();
  };

  handleOnFavorite = () => {
    // Handle favorite
  };

  handleOnShare = () => {
    // Handle share
  };

  render() {
    const {
      popularMovies,
      popularMoviesLoading,
      popularMoviesError,
      popularTvShows,
      popularTvShowsLoading,
      popularTvShowsError,
      trendingToday,
      trendingTodayLoading,
      trendingTodayError,
    } = this.props;

    AppLogger.info('[HomePage] Display props:', {
      popularMovies,
      popularMoviesLoading,
      popularMoviesError,
      popularTvShows,
      popularTvShowsLoading,
      popularTvShowsError,
      trendingToday,
      trendingTodayLoading,
      trendingTodayError,
    });

    return (
      <>
        <SearchView />
        <MediaSection
          items={popularMovies}
          loading={popularMoviesLoading}
          error={popularMoviesError}
          onFavorite={this.handleOnFavorite}
          onShare={this.handleOnShare}
          title="Popular Movies"
        />
        <MediaSection
          items={popularTvShows}
          loading={popularTvShowsLoading}
          error={popularTvShowsError}
          title="Popular TV Shows"
        />
        <CommunityView />
        <MediaSection
          items={trendingToday}
          loading={trendingTodayLoading}
          error={trendingTodayError}
          title="Trending Today"
        />
      </>
    );
  }
}

export default HomePage;

const HomePopularMoviesFragment = (state) => ({
  popularMovies: state?.HomePopularMovies?.popularMovies,
  popularMoviesLoading: state?.HomePopularMovies?.loading,
  popularMoviesError: state?.HomePopularMovies?.error,
});

const HomePopularTvShowsFragment = (state) => ({
  popularTvShows: state?.HomePopularTvShows?.popularTvShows,
  popularTvShowsLoading: state?.HomePopularTvShows?.loading,
  popularTvShowsError: state?.HomePopularTvShows?.error,
});

const HomeTrendingTodayFragment = (state) => ({
  trendingToday: state?.HomeTrendingToday?.trendingToday,
  trendingTodayLoading: state?.HomeTrendingToday?.loading,
  trendingTodayError: state?.HomeTrendingToday?.error,
});

const HomeProvider = {
  HomePopularMoviesFragment,
  HomePopularTvShowsFragment,
  HomeTrendingTodayFragment,
};

export default HomeProvider;

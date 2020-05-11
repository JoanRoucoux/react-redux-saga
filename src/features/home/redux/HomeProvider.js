const HomeMoviesFragment = (state) => ({
  movies: state?.HomeMovies?.movies,
  moviesLoading: state?.HomeMovies?.loading,
  moviesError: state?.HomeMovies?.error,
});

const HomeProvider = {
  HomeMoviesFragment,
};

export default HomeProvider;

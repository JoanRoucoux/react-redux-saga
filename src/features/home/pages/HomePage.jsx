import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppLogger,
  Reduxify,
} from '../../../core';
import {
  ErrorMessageView,
  LoadingView,
} from '../../commons/components';
import {
  HomeDispatcher,
  HomeProvider,
} from '../redux';

const {
  HomeMoviesFragment,
} = HomeProvider;

@Reduxify((state) => ({
  // define state to extract
  ...HomeMoviesFragment(state),
}), {
  // define actions to execute
  ...HomeDispatcher,
})
class HomePage extends Component {
  // propsType (validation)
  static propTypes = {
    movies: PropTypes.any,
    moviesLoading: PropTypes.bool,
    moviesError: PropTypes.string,
    requestMovies: PropTypes.func,
  };

  // default props
  static defaultProps = {
    movies: null,
    moviesLoading: false,
    moviesError: null,
    requestMovies: null,
  };

  // initial state
  state = {};

  // did mount staff
  componentDidMount() {
    this.initPage();
  }

  initPage = () => {
    const {
      requestMovies,
    } = this.props;
    requestMovies();
  };

  render() {
    const {
      movies,
      moviesLoading,
      moviesError,
    } = this.props;

    AppLogger.info('[HomePage] Display props:', {
      movies,
      moviesLoading,
      moviesError,
    });

    if (moviesLoading) {
      return <LoadingView />;
    }

    if (moviesError) {
      return <ErrorMessageView />;
    }

    return <p>Je suis HomePage</p>;
  }
}

export default HomePage;

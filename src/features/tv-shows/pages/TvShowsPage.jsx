import React, { Component } from 'react';
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';

class TvShowsPage extends Component {
  // propsType (validation)
  static propTypes = {};

  // default props
  static defaultProps = {};

  // initial state
  state = {};

  // did mount staff
  componentDidMount() {
    this.initPage();
  }

  initPage = () => {};

  render() {
    return <p>Je suis TvShowsPage</p>;
  }
}

export default TvShowsPage;

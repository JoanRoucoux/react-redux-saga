import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const LayoutWrapper = ({ children }) => (
  <>
    <CssBaseline />
    <Header />
    <Container
      component="main"
      disableGutters
      maxWidth={false}
    >
      {children}
    </Container>
    <Footer />
  </>
);

// prop type validation
LayoutWrapper.propTypes = {
  children: PropTypes.node,
};

// default prop
LayoutWrapper.defaultProps = {
  children: null,
};

export default LayoutWrapper;

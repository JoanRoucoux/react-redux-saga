import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';

const ThemeWrapper = ({ children }) => {
  const themeType = useSelector((state) => state?.ThemeType?.themeType);
  const muiTheme = createMuiTheme({
    palette: {
      type: themeType,
    },
  });
  return (
    <ThemeProvider theme={muiTheme}>
      {children}
    </ThemeProvider>
  );
};

// prop type validation
ThemeWrapper.propTypes = {
  children: PropTypes.node,
};

// default prop
ThemeWrapper.defaultProps = {
  children: null,
};

export default ThemeWrapper;

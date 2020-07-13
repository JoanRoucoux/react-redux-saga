import React from 'react';
import PropTypes from 'prop-types';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide
      appear={false}
      direction="down"
      in={!trigger}
    >
      {children}
    </Slide>
  );
};

// prop type validation
HideOnScroll.propTypes = {
  children: PropTypes.node,
};

// default prop
HideOnScroll.defaultProps = {
  children: null,
};

export default HideOnScroll;

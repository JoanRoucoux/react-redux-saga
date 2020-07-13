import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Slider from 'react-slick';
import { FPUtils } from '../../../../core';
import MediaCard from '../media-card/MediaCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .slick-slider': {
      overflow: 'hidden',
    },
    '& .slick-list': {
      margin: theme.spacing(0, -1),
    },
    '& .slick-slide': {
      padding: theme.spacing(0, 1),
    },
  },
}));

const {
  isDefined,
} = FPUtils;

const MediaCardList = ({
  items,
  loading,
  onFavorite,
  onShare,
}) => {
  const classes = useStyles();
  const settings = {
    adaptiveHeight: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className={classes.root}>
      <Slider {...settings}>
        {((loading || !isDefined(items)) ? Array.from(new Array(4)) : items).map((item) => (
          <MediaCard
            key={item?.id}
            item={item}
            onFavorite={onFavorite}
            onShare={onShare}
          />
        ))}
      </Slider>
    </div>
  );
};

// prop type validation
MediaCardList.propTypes = {
  items: PropTypes.any,
  loading: PropTypes.bool,
  onFavorite: PropTypes.func,
  onShare: PropTypes.func,
};

// default prop
MediaCardList.defaultProps = {
  items: null,
  loading: false,
  onFavorite: null,
  onShare: null,
};

export default MediaCardList;

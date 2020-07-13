import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {
  ErrorMessageView,
  MediaCardList,
} from '../../../commons/components';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(4, 0, 3),
  },
}));

const MediaSection = ({
  items,
  loading,
  error,
  onFavorite,
  onShare,
  title,
}) => {
  const classes = useStyles();
  if (error) {
    return <ErrorMessageView />;
  }
  return (
    <Container
      className={classes.content}
      maxWidth="md"
    >
      <Typography
        component="h3"
        variant="h5"
        gutterBottom
      >
        {title}
      </Typography>
      <MediaCardList
        items={items}
        loading={loading}
        onFavorite={onFavorite}
        onShare={onShare}
      />
    </Container>
  );
};

// prop type validation
MediaSection.propTypes = {
  items: PropTypes.any,
  loading: PropTypes.bool,
  error: PropTypes.any,
  onFavorite: PropTypes.func,
  onShare: PropTypes.func,
  title: PropTypes.string,
};

// default prop
MediaSection.defaultProps = {
  items: null,
  loading: null,
  error: null,
  onFavorite: null,
  onShare: null,
  title: null,
};

export default MediaSection;

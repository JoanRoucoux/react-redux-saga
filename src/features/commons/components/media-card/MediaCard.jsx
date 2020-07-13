import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import Rating from '@material-ui/lab/Rating';
import ShareIcon from '@material-ui/icons/Share';
import Skeleton from '@material-ui/lab/Skeleton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  rating: {
    display: 'flex',
    alignItems: 'center',
  },
  voteAverage: {
    marginLeft: theme.spacing(0.5),
  },
}));

const MediaCard = ({
  className,
  item,
  onFavorite,
  onShare,
}) => {
  const classes = useStyles();
  const {
    posterPath,
    title,
    voteAverage,
  } = item || {};
  return (
    <Card className={className}>
      <CardActionArea>
        {item ? (
          <CardMedia
            component="img"
            src={posterPath}
            title={title}
            alt={title}
          />
        ) : (
          <Skeleton
            variant="rect"
            width={220}
            height={330}
          />
        )}
        <CardContent>
          <Box className={classes.rating}>
            {item ? (
              <>
                <Rating
                  name="read-only"
                  value={1}
                  max={1}
                  readOnly
                  size="small"
                />
                <Typography
                  color="textSecondary"
                  component="div"
                  variant="subtitle1"
                  className={classes.voteAverage}
                >
                  {voteAverage}
                </Typography>
              </>
            ) : (
              <Skeleton width="30%" />
            )}
          </Box>
          <Typography
            variant="h6"
            component="h5"
          >
            {item ? title : <Skeleton />}
          </Typography>
        </CardContent>
      </CardActionArea>
      {item && (
        <CardActions disableSpacing>
          <Tooltip title="Add to favorites">
            <IconButton
              aria-label="Add to favorites"
              color="inherit"
              onClick={onFavorite}
            >
              <FavoriteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Share">
            <IconButton
              aria-label="Share"
              color="inherit"
              onClick={onShare}
            >
              <ShareIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      )}
    </Card>
  );
};

// prop type validation
MediaCard.propTypes = {
  className: PropTypes.string,
  item: PropTypes.any,
  onFavorite: PropTypes.func,
  onShare: PropTypes.func,
};

// default prop
MediaCard.defaultProps = {
  className: null,
  item: null,
  onFavorite: null,
  onShare: null,
};

export default MediaCard;

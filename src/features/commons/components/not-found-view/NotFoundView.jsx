import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Path } from '../../../../settings';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: theme.spacing(8),
  },
  home: {
    marginTop: theme.spacing(3),
  },
}));

const {
  HOME_DEFAULT_PATH,
} = Path;

const NotFoundView = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <div className={classes.wrapper}>
        <Typography
          component="h1"
          variant="h3"
          gutterBottom
        >
          Page not found
        </Typography>
        <Typography
          variant="subtitle2"
          gutterBottom
        >
          Uh oh, we can&apos;t seem to find the page you&apos;re looking for.
          Try going back to the previous page.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.home}
          href={HOME_DEFAULT_PATH}
        >
          Go back home
        </Button>
      </div>
    </Container>
  );
};

export default NotFoundView;

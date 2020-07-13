import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 3),
  },
}));

const CommunityView = () => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <Container maxWidth="md">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
          >
            <Typography
              component="h3"
              variant="h4"
            >
              Join Today
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
          >
            <Typography
              variant="body2"
            >
              Get access to maintain your own custom personal lists,
              track what you&apos;ve seen and search
              and filter for what to watch next—regardless if it&apos;s in theatres,
              on TV or available on popular streaming services like
              Canal+, Canal+ Disney+, Netflix, and Amazon Prime Video.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
          >
            <Typography
              variant="body2"
            >
              Enjoy TMDb ad free
              Maintain a personal watchlist
              Filter by your subscribed streaming services and find something to watch
              Log the movies and TV shows you&apos;ve seen
              Build custom lists
              Contribute to and improve our database
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
          >
            <Button
              variant="contained"
              color="primary"
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default CommunityView;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import SearchForm from './search-form/SearchForm';

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

const SearchView = () => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <Container maxWidth="md">
        <Typography
          component="h2"
          variant="h3"
          color="textPrimary"
          gutterBottom
        >
          Welcome.
        </Typography>
        <Typography
          component="h3"
          variant="h6"
          color="textSecondary"
          paragraph
        >
          Millions of movies, TV shows and people to discover. Explore now.
        </Typography>
        <SearchForm />
      </Container>
    </div>
  );
};

export default SearchView;

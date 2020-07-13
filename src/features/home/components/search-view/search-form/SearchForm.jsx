import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const SearchView = () => (
  <form noValidate>
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={4}
    >
      <Grid
        item
        xs={12}
        sm={10}
      >
        <TextField
          variant="outlined"
          required
          fullWidth
          id="search"
          name="search"
          placeholder="Search for a movie, tv show, person..."
          autoComplete="on"
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={2}
      >
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
        >
          Search
        </Button>
      </Grid>
    </Grid>
  </form>
);

export default SearchView;

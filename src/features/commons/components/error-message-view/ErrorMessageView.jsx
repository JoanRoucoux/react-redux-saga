import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const ErrorMessageView = () => (
  <Box my={3}>
    <Container maxWidth="md">
      <Alert variant="outlined" severity="error">
        <AlertTitle>Oops, something went wrong</AlertTitle>
        Maybe you should try again by reloading the page!
      </Alert>
    </Container>
  </Box>
);

export default ErrorMessageView;

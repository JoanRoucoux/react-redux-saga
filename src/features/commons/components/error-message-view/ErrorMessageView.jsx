import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const ErrorMessageView = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert variant="filled" severity="error">
        <AlertTitle>Oops, something went wrong</AlertTitle>
        Maybe you should try again by reloading the page!
      </Alert>
    </div>
  );
};

export default ErrorMessageView;

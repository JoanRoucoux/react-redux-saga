import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Copyright from './copyright/Copyright';

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(6),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  footerList: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
}));

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['About', 'Privacy policy', 'Terms of use'],
  },
];

const Footer = () => {
  const classes = useStyles();
  return (
    <Container
      maxWidth="md"
      component="footer"
      className={classes.footer}
    >
      <Grid
        container
        spacing={4}
        justify="space-evenly"
      >
        {footers.map((footer) => (
          <Grid
            key={footer.title}
            item
            xs={6}
            sm={3}
          >
            <Typography
              variant="h6"
              color="textPrimary"
              gutterBottom
            >
              {footer.title}
            </Typography>
            <ul className={classes.footerList}>
              {footer.description.map((item) => (
                <li key={item}>
                  <Link
                    href="https://material-ui.com/"
                    variant="subtitle1"
                    color="textSecondary"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Footer;

import React, { useState } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreIcon from '@material-ui/icons/MoreVert';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import TranslateIcon from '@material-ui/icons/Translate';
import Typography from '@material-ui/core/Typography';
import CommomActionTypes from '../../redux/CommonActionTypes';
import HideOnScroll from './hide-on-scroll/HideOnScroll';

const {
  SET_LIGHT_THEME_TYPE,
  RESET_THEME_TYPE,
} = CommomActionTypes;

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const themeType = useSelector((state) => state?.ThemeType?.themeType);
  const DARK_THEME_TYPE = 'dark';

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const getThemeTypeIcon = () => (themeType === DARK_THEME_TYPE ? <Brightness7Icon /> : <Brightness4Icon />);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleToggleTheme = () => {
    dispatch({ type: themeType === DARK_THEME_TYPE ? SET_LIGHT_THEME_TYPE : RESET_THEME_TYPE });
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleToggleTheme}>
        {getThemeTypeIcon()}
        <Box
          component="p"
          ml={1}
        >
          Toggle light/dark theme
        </Box>
      </MenuItem>
      <MenuItem>
        <GitHubIcon />
        <Box
          component="p"
          ml={1}
        >
          Github repository
        </Box>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <HideOnScroll>
        <AppBar position="static">
          <Toolbar>
            <Typography
              className={classes.title}
              variant="h6"
              noWrap
            >
              Flixer
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Tooltip title="Change language">
                <Button>
                  <TranslateIcon />
                  <Box
                    component="span"
                    ml={1}
                    mr={0.5}
                  >
                    ENGLISH
                  </Box>
                  <ExpandMoreIcon fontSize="small" />
                </Button>
              </Tooltip>
              <Tooltip title="Toggle light/dark theme">
                <IconButton
                  aria-label="Toggle light/dark theme"
                  color="inherit"
                  onClick={handleToggleTheme}
                >
                  {getThemeTypeIcon()}
                </IconButton>
              </Tooltip>
              <Tooltip title="GitHub repository">
                <IconButton
                  aria-label="GitHub repository"
                  color="inherit"
                  href="https://github.com/JoanRoucoux/react-redux-saga"
                  target="_blank"
                >
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {renderMobileMenu}
    </div>
  );
};

export default Header;

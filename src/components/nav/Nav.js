import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import useStyles from './Nav.styles';


const  Navbar = ({props, handleChange}) => {
  const classes = useStyles(props);

  return (
    <div>
      <Toolbar className={classes.toolbar}>
        <SportsSoccerIcon style={{ color: 'grey' }}/>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
         Football Highlights
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleChange}
        />
      </div>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          <Link
            color="inherit"
            noWrap
            variant="body2"
            className={classes.toolbarLink}
          >
           Premier League
          </Link>
          <Link
          color="inherit"
          noWrap
          variant="body2"
          className={classes.toolbarLink}
        >
         Serie A
        </Link>
        <Link
        color="inherit"
        noWrap
        variant="body2"
        className={classes.toolbarLink}
      >
       BundesLiga
      </Link>
      <Link
      color="inherit"
      noWrap
      variant="body2"
      className={classes.toolbarLink}
    >
     La Liga
    </Link>
    <Link
    color="inherit"
    noWrap
    variant="body2"
    className={classes.toolbarLink}
  >
  Ligue 1
  </Link>
  <Link
  color="inherit"
  noWrap
  variant="body2"
  className={classes.toolbarLink}
>
 Championships
</Link>
      </Toolbar>
    </div>
  );
}

Navbar.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};

export default Navbar;
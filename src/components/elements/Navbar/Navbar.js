import React from 'react';
import {Link} from 'react-router-dom';

// mui components
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

// styles
import { useStyles } from './styles';

const Navbar = () => {

    const classes = useStyles();

    return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Grid container spacing={5}>
            <Grid item md={10}>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <IconButton edge="start" className={classes.navButton} aria-label="menu">
                    Phone Book
                </IconButton>
            </Link>
            </Grid>
            <Grid item md={2}>
                <Link to="/add-contact" style={{ textDecoration: 'none' }}><Button className={classes.button}>Create Contact</Button></Link>
            </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
    </div>
    );
}

export default Navbar;

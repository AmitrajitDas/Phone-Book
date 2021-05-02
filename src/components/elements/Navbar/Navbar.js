import React from 'react';

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
                <IconButton edge="start" className={classes.navButton} color="inherit" aria-label="menu">
                    Phone Book
                </IconButton>
            </Grid>
            <Grid item md={2}>
                <Button className={classes.button}>Create Contact</Button>
            </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
    </div>
    );
}

export default Navbar;

import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import { useStyles } from './styles';

const AddContact = () => {

    const classes = useStyles();

    return (
        <Grid container justify="center">
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <form className={classes.form} noValidate autoComplete="off">
                        <Grid item xs={12}>
                            <TextField
                            required
                            id="name"
                            label="Name"
                            variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            id="phone"
                            label="Phone Number"
                            variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            id="email"
                            label="E-mail"
                            variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <CardActions>
                                <Button className={classes.button}>Add</Button>
                            </CardActions>
                                
                        </Grid>
                    </form>

                </CardContent>
            </Card>
        </Grid>
    )
}

export default AddContact;

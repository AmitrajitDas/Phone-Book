import React, { useState }  from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


import { useStyles } from './styles';

const AddContact = () => {

    const classes = useStyles();

    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");

    const CreateContact = e => {
        e.preventDefault();
        console.log(name, phone, email);
    }

    return (
        <Grid container justify="center">
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <form className={classes.form} onSubmit={(e) => CreateContact(e)}>
                        <Grid item xs={12}>
                            <TextField
                            required
                            id="name"
                            label="Name"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            id="phone"
                            label="Phone Number"
                            variant="outlined"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            id="email"
                            label="E-mail"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <CardActions>
                                <Button className={classes.button} type="submit">Add</Button>
                            </CardActions>
                                
                        </Grid>
                    </form>

                </CardContent>
            </Card>
        </Grid>
    )
}

export default AddContact;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';


import { useStyles } from './styles';
import { getContact } from '../../../../Redux/Actions/contactActions';

const EditContact = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const contact = useSelector((state) => state.contactReducer.contact);
    const history = useHistory();
    const { id } = useParams();

    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");

    useEffect(() => {
        if(contact != null){
            setName(contact.name);
            setPhone(contact.phone);
            setEmail(contact.email);   
        }

        dispatch(getContact(id));
        
    }, [contact]);



    return (
        <Grid container justify="center">
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <form className={classes.form}>
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

export default EditContact;

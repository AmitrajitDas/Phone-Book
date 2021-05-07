import React, { useState } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from 'react-avatar';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


import { useStyles } from './styles';

    

    const Contact = ({ contact }) => {

    const {name, phone, email} = contact;

    const classes = useStyles();
    
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
            <TableRow >
            <Checkbox
            onChange={handleChange}
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
              <TableCell>
              <Avatar style={{ marginRight : '1rem' }} name={name} size="45" round={true} />
                {name}
              </TableCell>
              <TableCell>{phone}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell className={classes.actions}>
                  <a href="#"><EditIcon style={{ marginRight : '1rem', color: '#04009a'}} /></a>
                  <a href="#"><DeleteIcon style={{ color: '#ff005c'}} /></a>
              </TableCell>
            </TableRow>
    )
}

export default Contact

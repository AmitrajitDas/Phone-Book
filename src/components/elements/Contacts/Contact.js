import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from 'react-avatar';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


import { useStyles } from './styles';

    

    const Contact = ({ contact }) => {

    const {name, phone, email, id} = contact;

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
                  <Link to={`/contacts/edit/${id}`}><EditIcon style={{ marginRight : '1rem', color: '#04009a'}} /></Link>
                  <Link to="/#"><DeleteIcon style={{ color: '#ff005c'}} /></Link>
              </TableCell>
            </TableRow>
    )
}

export default Contact

import React, { useState } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from 'react-avatar';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Contact = ({ contact }) => {

    const {name, phone, email} = contact;
    
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
              <TableCell>
                  <EditIcon />
              </TableCell>
              <TableCell>
                  <DeleteIcon />
              </TableCell>
            </TableRow>
    )
}

export default Contact

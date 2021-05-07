import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';


import Contact from './Contact';

import { useStyles } from './styles';

const Contacts = () => {
  const classes = useStyles();

  const contacts = useSelector(state => state.contacts);
  console.log(contacts);

  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead >
          <TableRow>
           <Checkbox
            onChange={handleChange}
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
            <TableCell>Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
      { contacts.map((contact) =>(
          <Contact contact={contact} />
        ))
      }
            
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Contacts;

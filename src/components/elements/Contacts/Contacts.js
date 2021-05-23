import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';


import Contact from './Contact';
import { selectAllContacts, clearAllContacts } from '../../../Redux/Actions/contactActions';

import { useStyles } from './styles';

const Contacts = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactReducer.contacts);
   const selectedContacts = useSelector(state => state.contactReducer.selectedContacts);

  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    if(selectAll){
      dispatch(selectAllContacts(contacts.map(contact => contact.id)));
    } else {
      dispatch(clearAllContacts());
    }

  }, [selectAll]);

  // const [checked, setChecked] = useState(true);

  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };

  return (
    
    <TableContainer component={Paper}>

        {/* {
        selectedContacts > 0 ? ( 
          <Button className={classes.button}>Delete All</Button>
        ) : null 
        
      } */}

      <Table className={classes.table} aria-label="simple table">
        <TableHead >
          <TableRow style={{ backgroundColor: '#faf2da'}}>
           <Checkbox
            id="selectAll"
            // onChange={handleChange}
            onClick={() => setSelectAll(!selectAll)}
            value={selectAll}
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
            <TableCell>Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
      { contacts.map((contact) =>(
          <Contact contact={contact} key={contact.id} selectAll={selectAll} />
        ))
      }
            
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Contacts;

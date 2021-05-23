import { CREATE, UPDATE, DELETE, GET, SELECT, CLEAR } from '../Constants/actionTypes';


// add contact
export const addContact = (contact) => ({
        type: CREATE,
        payload: contact,
});

// get contact

export const getContact = (id) => ({
    type: GET,
    payload: id,
});

// update contact

export const updateContact = (contact) => ({
    type: UPDATE,
    payload: contact,
});

// delete contact

export const deleteContact = (id) => ({
    type: DELETE,
    payload: id,
});

// select all contacts

export const selectAllContacts = (id) => ({
    type: SELECT,
    payload : id,
});

// clear all selected contacts

export const clearAllContacts = () => ({
    type: CLEAR,
});


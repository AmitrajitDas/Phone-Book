import { CREATE, UPDATE, DELETE, GET } from '../Constants/actionTypes';


// add contact
export const addContact = (contact) => ({
        type: CREATE,
        payload: contact,
});

// get contact

export const getContact = (id) => ({
    type: GET,
    payload: id,
})

// update contact

export const updateContact = (contact) => ({
    type: UPDATE,
    payload: contact,
})

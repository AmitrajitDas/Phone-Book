import { CREATE, UPDATE, DELETE } from '../Constants/actionTypes';

export const addContacts = (contact) => {
    return {
        type: CREATE,
        payload: contact,
    };
};
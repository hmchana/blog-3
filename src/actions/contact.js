import axios from 'axios';

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
} from './types';

// // Add Contact
// export const addContact = (contact) => (dispatch) => {
//   contact.id = uuidv4();
//   dispatch({ type: ADD_CONTACT, payload: contact });
// };

// Add Contact
export const addContact = (contact) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      contact,
      config
    );

    dispatch({
      type: ADD_CONTACT,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// // Delete Contact
// export const deleteContact = (id) => (dispatch) => {
//   dispatch({ type: DELETE_CONTACT, payload: id });
// };

// Delete experience
export const deleteContact = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    //console.log(res);
    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    });
  } catch (err) {
    console.log(err);
  }
};

// Set current Contact
export const setCurrent = (contact) => (dispatch) => {
  dispatch({ type: SET_CURRENT, payload: contact });
};

// Clear current  Contact
export const clearCurrent = () => (dispatch) => {
  dispatch({ type: CLEAR_CURRENT });
};

// // Update Contact
// export const updateContact = (contact) => (dispatch) => {
//   dispatch({ type: UPDATE_CONTACT, payload: contact });
// };

// Update Contact
export const updateContact = (contact) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${contact.userId}`,
      contact,
      config
    );
    console.log(res.data);
    dispatch({ type: UPDATE_CONTACT, payload: res.data });
  } catch (err) {
    console.log(err.message);
  }
};

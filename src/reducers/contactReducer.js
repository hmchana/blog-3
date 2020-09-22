import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
} from '../actions/types';

const initialSate = {
  contacts: [],
  current: null,
};

export default (state = initialSate, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => action.payload !== contact.id
        ),
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };

    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.userId === action.payload.userId ? action.payload : contact
        ),
      };

    default:
      return state;
  }
};

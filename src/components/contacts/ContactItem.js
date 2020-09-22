import React from 'react';
import { connect } from 'react-redux';
import { deleteContact, setCurrent } from '../../actions/contact';

const ContactItem = ({ contact, deleteContact, setCurrent }) => {
  const { id, userId, title, body } = contact;

  const onDelete = () => {
    deleteContact(id);
  };
  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {' '}
        <strong>User Id</strong> :{userId}
      </h3>
      <ul className='list'>
        <li>
          {' '}
          <strong>Title</strong> : {title}
        </li>
        <li>
          {' '}
          <strong>Body</strong> : {body}
        </li>
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

export default connect(null, { deleteContact, setCurrent })(ContactItem);

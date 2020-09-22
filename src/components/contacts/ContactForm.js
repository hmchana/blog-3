import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addContact, updateContact, clearCurrent } from '../../actions/contact';

const ContactForm = ({
  addContact,
  current: { current },
  updateContact,
  clearCurrent,
}) => {
  const [contact, setContact] = useState({
    userId: '',
    title: '',
    body: '',
  });

  const { userId, title, body } = contact;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        userId: '',
        title: '',
        body: '',
      });
    }
  }, [current]);

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (current !== null) {
      updateContact(contact);
    } else {
      addContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>{current ? 'Update BLOG' : 'Add BLOG'}</h2>
      <input
        type='text'
        placeholder='UserId'
        name='userId'
        value={userId}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Title'
        name='title'
        value={title}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Body'
        name='body'
        value={body}
        onChange={onChange}
      />
      <div>
        <input
          type='submit'
          className='btn btn-primary btn-block'
          value={current ? 'Update BLOG' : 'Add BLOG'}
        />
        {current && (
          <div>
            <button className='btn btn-light btn-block' onClick={clearAll}>
              Clear
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  current: state.contact,
});

export default connect(mapStateToProps, {
  addContact,
  updateContact,
  clearCurrent,
})(ContactForm);

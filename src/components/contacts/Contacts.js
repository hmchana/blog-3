import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import ContactItem from './ContactItem';

const Contacts = ({ contact: { contacts } }) => {
  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  contact: state.contact,
});

export default connect(mapStateToProps)(Contacts);

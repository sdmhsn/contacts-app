import React from 'react';
import ContactItem from './ContactItem';

function ContactList({ contacts }) {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactItem key={contacts.id} {...contact} />
      ))}
    </div>
  );
}

export default ContactList;

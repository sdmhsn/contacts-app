import React from 'react';
import ContactItem from './ContactItem';

function ContactList({ contacts }) {
  return (
    <div className="contact-list">
      {contacts.map((contact, onDelete) => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          onDelete={onDelete}
          {...contact}
        />
      ))}
    </div>
  );
}

export default ContactList;

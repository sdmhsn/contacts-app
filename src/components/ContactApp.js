import React from 'react';
import ContactList from './ContactList';
import { getData } from '../utils/data';
import ContactInput from './ContactInput';

class ContactApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: getData(),
    };

    this.onAddContactHandler = this.onAddContactHandler.bind(this);
    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
  }

  onAddContactHandler({ name, tags }) {
    this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: +new Date(),
            name,
            tags,
            imageUrl: '/images/default.jpg',
          },
        ],
      };
    });
  }

  onDeleteEventHandler(id) {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);

    this.setState(() => {
      return {
        contacts,
      };
    });
  }

  render() {
    return (
      <div className="contact-app">
        <h1>Contact App</h1>
        <h2>Add Contact</h2>
        <ContactInput addContact={this.onAddContactHandler} />
        <h2>Contact List</h2>
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.onDeleteEventHandler}
        />
      </div>
    );
  }
}

export default ContactApp;

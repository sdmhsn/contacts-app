import React from 'react';

class ContactInput extends React.Component {
  constructor() {
    super();
    
    this.state = {
      name: '',
      tags: '',
    };

    this.onChangeEventHandler = this.onChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onChangeEventHandler(event) {
    this.setState(() => {
      return {
        [event.target.name]: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addContact(this.state);
  }

  render() {
    return (
      <div className="contact-input">
        <form method="get" onSubmit={this.onSubmitEventHandler}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={this.onChangeEventHandler}
          />
          <input
            type="text"
            placeholder="tags"
            name="tags"
            onChange={this.onChangeEventHandler}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default ContactInput;

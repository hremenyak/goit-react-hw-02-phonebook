import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Wrapper } from './ContactForm/ContactForm.styled';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addContact = e => {
    const contactId = nanoid();
    e.preventDefault();
    const contactName = e.target.name.value;
    const contactNumber = e.target.number.value;
    console.log(contactName);
    console.log(contactNumber);

    this.setState(prevState => {
      prevState.contacts.push({
        id: contactId,
        name: contactName,
        number: contactNumber,
      });
      return {
        contacts: [...prevState.contacts],
        name: contactName,
        number: contactNumber,
      };
    });
  };

  render() {
    return (
      <Wrapper>
        <h1> Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h1> Contacts</h1>
        <ContactList contacts={this.state.contacts} />
      </Wrapper>
    );
  }
}

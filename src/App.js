import React, { Component } from 'react';
import PhoneBook from './Components/PhoneBook/PhoneBook';
import ContactsList from './Components/Contacts/ContactsList';
import Filter from './Components/Filter/Filter';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>PhoneBook</h1>
        <PhoneBook />

        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    );
  }
}

export default App;

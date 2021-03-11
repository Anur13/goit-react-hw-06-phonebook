import React, { Component } from 'react';
import PhoneBook from './Components/PhoneBook/PhoneBook';
import ContactsList from './Components/Contacts/ContactsList';
import Filter from './Components/Filter/Filter';
import { connect } from 'react-redux';
import { getFromLocalStorage } from './Redux/phonebook/phonebook-actions';
import storage from 'redux-persist/lib/storage';

class App extends Component {
  // componentDidMount() {
  //   const newArray = JSON.parse(localStorage.getItem('contacts'));
  //   if (newArray !== null && newArray.length > 0) {
  //     this.props.reWrite(newArray);
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.contacts !== this.props.items) {
  //     localStorage.setItem('contacts', JSON.stringify(this.props.items));
  //   }
  // }

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
const mapStateToProps = state => ({
  items: state.contacts.items,
});
const mapDispatchToProps = dispatchEvent => ({
  reWrite: arr => dispatchEvent(getFromLocalStorage(arr)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

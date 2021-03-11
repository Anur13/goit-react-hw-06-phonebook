import React, { Component } from 'react';
import styles from './PhoneBook.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { submit } from '../../Redux/phonebook/phonebook-actions';

class PhoneBook extends Component {
  state = {
    name: '',
    id: '',
    number: '',
  };

  handleNameChange = event => {
    const { value } = event.currentTarget;

    this.setState({
      name: value,
    });
  };

  handleNumberChange = event => {
    let { value } = event.currentTarget;

    this.setState({
      number: value,
    });
  };

  render() {
    // console.log(this.props);
    const { handleSubmit, items } = this.props;

    return (
      <form
        className={styles.form}
        onSubmit={e => {
          e.preventDefault();
          handleSubmit(this.state, items);
        }}
      >
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            onChange={this.handleNameChange}
            value={this.state.name}
            type="text"
            required
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.input}
            onChange={this.handleNumberChange}
            value={this.state.number}
            type="tel"
            pattern="[0-9]{7}"
            placeholder="533-33-23"
            minLength="7"
            maxLength="7"
            required
          />
        </label>
        <button className={styles.submitButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  items: state.contacts.items,
});

const mapDispatchToProps = dispatchEvent => ({
  handleSubmit: (state, array) => {
    const check = array.find(item => item.name === state.name);
    if (check) {
      alert('Card with this name already exists');
      return;
    }
    return dispatchEvent(submit(state));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);

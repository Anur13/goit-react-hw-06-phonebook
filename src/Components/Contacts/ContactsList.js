import React from 'react';
import Contacts from './Contacts';
import styles from './Contacts.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ContactsList = ({ arr, filter, deleteID }) => {
  let filterContacts = arr;
  if (filter.length > 0) {
    filterContacts = arr.filter(item =>
      item.name.toLowerCase().includes(filter) ? item : null,
    );
  }

  return (
    <ul className={styles.list}>
      {filterContacts.map(item => {
        return <Contacts key={item.id} {...item} deleteID={deleteID} />;
      })}
    </ul>
  );
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
  arr: state.contacts.items,
});

export default connect(mapStateToProps)(ContactsList);

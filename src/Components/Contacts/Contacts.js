import React from 'react';
import styles from './Contacts.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItem } from '../../Redux/phonebook/phonebook-actions';

const Contacts = ({ name, number, id, handleDelete }) => {
  return (
    <>
      <li>
        <span className={styles.name}>
          {name}: {number}
        </span>

        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </li>
    </>
  );
};

const mapDispatchToProps = (dispatchEvent, ownProps) => ({
  handleDelete: event => dispatchEvent(deleteItem(ownProps.id)),
});

Contacts.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(Contacts);

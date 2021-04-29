import React from 'react';
import {
  ListGroup, ListGroupItem
} from 'reactstrap';
import PropTypes from 'prop-types';

const Quotes = ({
  id,
  dialog,
}) => (
  <div>
    <ListGroup id={id} key={id}>
      <ListGroupItem>Famous Quotes: {dialog}</ListGroupItem>
    </ListGroup>
  </div>
);

Quotes.propTypes = {
  id: PropTypes.string,
  dialog: PropTypes.string,
};

export default Quotes;

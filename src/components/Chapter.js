import React from 'react';
import {
  ListGroup, ListGroupItem
} from 'reactstrap';
import PropTypes from 'prop-types';

const Chapter = ({
  id,
  chapterName,
}) => (
  <div>
    <ListGroup id={id} key={id}>
      <ListGroupItem>Chapter Name: {chapterName}</ListGroupItem>
    </ListGroup>
  </div>
);

Chapter.propTypes = {
  id: PropTypes.string,
  chapterName: PropTypes.string,
};

export default Chapter;

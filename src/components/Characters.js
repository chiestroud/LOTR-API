/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import {
  Card, CardTitle, Button
} from 'reactstrap';
import ReactCardFlip from 'react-card-flip';
import PropTypes from 'prop-types';
import { getQuotes } from '../helpers/data/characterData';
import Quotes from './Quotes';

const Characters = ({
  id,
  name,
}) => {
  const [quotes, setQuotes] = useState([]);
  const [showQuotes, setShowQuotes] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = (e) => {
    const uniqueId = e.target.id;
    getQuotes(uniqueId)
      .then((data) => setQuotes(data));
    setShowQuotes((prevState) => !prevState);
    setIsFlipped(!isFlipped);
  };
  return (
    <div className='container'>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Card body key={id}>
        <CardTitle tag="h5">{name}</CardTitle>
        <Button
          color='info'
          id={id}
          onClick={handleClick}
        >Show Quote</Button>
      </Card>
      {showQuotes
          && <Card body key={id}>
          <CardTitle tag="h5">{name}</CardTitle>
          {quotes.map((quote) => (
            <Quotes quotes={setQuotes} key={quote._id}
              dialog={quote.dialog}
              id={quote._id}
            />
          ))}
        <Button
          color='info'
          id={id}
          onClick={handleClick}
        >Close Quote</Button>
      </Card>
      }
      </ReactCardFlip>
  </div>
  );
};

Characters.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};

export default Characters;

/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Card, CardTitle, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { getChapters } from '../helpers/data/characterData';
import Chapter from './Chapter';

const Book = ({
  id,
  name
}) => {
  const [chapter, setChapter] = useState([]);
  const [showChapter, setShowChapter] = useState(false);
  const handleClick = (e) => {
    const uniqueId = e.target.id;
    getChapters(uniqueId)
      .then((data) => setChapter(data));
    setShowChapter((prevState) => !prevState);
  };
  return (
    <div className='list-group'>
      <Card body key={id}>
        <CardTitle tag="h5">{name}</CardTitle>
        <Button
          color='success'
          id={id}
          onClick={handleClick}
        >
          {showChapter ? 'Close Chapter' : 'Show Chapter'}
        </Button>
      </Card>
      {showChapter
        && <Card className="list-group mb-4">
            {chapter.map((title) => (
          <Chapter chapter={setChapter} key={title._id}
            chapterName={title.chapterName}
            id={title._id}
          />
            ))}
        </Card>
    }
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};

export default Book;

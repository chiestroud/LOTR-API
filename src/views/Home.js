/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Card } from 'reactstrap';
import { getCharacter } from '../helpers/data/characterData';
import Characters from '../components/Characters';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [characterPerPage, setCharacterPerPage] = useState(10);

  useEffect(() => {
    getCharacter()
      .then((data) => setCharacters(data));
  }, []);
  // Get current characters
  // const indexOfLastPost = currentPage * characterPerPage;
  // const indexOfFirstPost = indexOfLastPost - characterPerPage;
  // const currentCharacters = characters.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className='App'>
      <h1>Lord of the Rings Characters</h1>
      <Card className="list-group mb-4">
        {characters.map((character) => (
          // eslint-disable-next-line no-underscore-dangle
          <Characters characters={setCharacters} key={character._id}
            className="list-group-item"
            name={character.name}
            race={character.race}
            id={character._id}
          />
        ))}
      </Card>
      {/* <Pagination characterPerPage={characterPerPage} totalPosts={characters.length} paginate={paginate} /> */}
    </div>
  );
};

export default Home;

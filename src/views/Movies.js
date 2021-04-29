/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Card } from 'reactstrap';
import Movie from '../components/Movie';
import { getMovies } from '../helpers/data/characterData';
// import Movie from '../components/Movie';
// import { getMovies } from '../helpers/data/characterData';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies()
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className='App'>
      <h1>List of Lord of the Rings Movies</h1>
      <Card className="list-group mb-4">
        {movies.map((movie) => (
          // eslint-disable-next-line no-underscore-dangle
          <Movie movies={setMovies} key={movie._id}
            className="list-group-item"
            name={movie.name}
            bugdgetInMillions={movie.budgetInMillions}
            boxOfficeRevenueInMillions={movie.boxOfficeRevenueInMillions}
            academyAwardNominations={movie.academyAwardNominations}
            academyAwardWins={movie.academyAwardWins}
            rottenTomatesScore={movie.rottenTomatesScore}
          />
        ))}
      </Card>
      {/* <Pagination characterPerPage={characterPerPage} totalPosts={characters.length} paginate={paginate} /> */}
    </div>
  );
};

export default Movies;

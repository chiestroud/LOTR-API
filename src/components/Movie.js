import React from 'react';
import {
  Card, CardTitle, ListGroup, ListGroupItem
} from 'reactstrap';
import PropTypes from 'prop-types';

const Movie = ({
  id,
  name,
  bugdgetInMillions,
  boxOfficeRevenueInMillions,
  academyAwardNominations,
  academyAwardWins,
  rottenTomatesScore
}) => (
  <div>
      <Card body key={id}>
        <CardTitle tag="h5">{name}</CardTitle>
          <ListGroup>
            <ListGroupItem>Budget: ${bugdgetInMillions} Million</ListGroupItem>
            <ListGroupItem>Box Office Revenue: ${boxOfficeRevenueInMillions} Million</ListGroupItem>
            <ListGroupItem>Academy Award Nominations: {academyAwardNominations} times</ListGroupItem>
            <ListGroupItem>Academy Award Wins: {academyAwardWins} times</ListGroupItem>
            <ListGroupItem>Rotten Tomate Scpre: {rottenTomatesScore}</ListGroupItem>
          </ListGroup>
      </Card>
    </div>
);

Movie.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  bugdgetInMillions: PropTypes.number,
  boxOfficeRevenueInMillions: PropTypes.number,
  academyAwardNominations: PropTypes.number,
  academyAwardWins: PropTypes.number,
  rottenTomatesScore: PropTypes.number
};

export default Movie;

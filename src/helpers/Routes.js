import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Books from '../views/Books';
import Home from '../views/Home';
import Movies from '../views/Movies';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          path='/movies'
          component={Movies} />
        <Route
          path='/books'
          component={Books} />
      </Switch>
    </div>
  );
}

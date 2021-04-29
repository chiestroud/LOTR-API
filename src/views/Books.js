/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Card } from 'reactstrap';
import Book from '../components/Book';
import { getBooks } from '../helpers/data/characterData';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks()
      .then((bookArray) => setBooks(bookArray));
  }, []);
  console.warn(books);

  return (
    <div className='App'>
      <h1>List of Books</h1>
      <Card className="list-group mb-4">
        {books.map((book) => (
          <Book books={setBooks} key={book._id}
            name={book.name}
            id={book._id}
          />
        ))}
      </Card>
    </div>
  );
};

export default Books;

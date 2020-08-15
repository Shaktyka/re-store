import React from 'react';

import './book-list-item';

const BookListItem = ({ book }) => {
  const { title, author, price, coverImg } = book;

  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={ coverImg } alt={ title } />
      </div>
      <div className="book-details">
        <a href="#" className="book-title">{ title }</a>
        <div className="book-author">{ author }</div>
        <div className="book-price">{ price }</div>
      </div>
    </div>
  );
};

export default BookListItem;

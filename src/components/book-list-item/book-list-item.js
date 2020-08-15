import React from 'react';

import {Link} from 'react-router-dom';

import './book-list-item.css';

const BookListItem = ({ book }) => {
  const { id, title, author, price, coverImg } = book;

  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={ coverImg } alt={ title } />
      </div>
      <div className="book-details">
        <Link to={`/book/${id}`} className="book-title">{ title }</Link>
        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
        <button className="btn btn-info add-to-cart">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default BookListItem;

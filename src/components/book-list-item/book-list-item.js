import React from 'react';

import {Link} from 'react-router-dom';

import './book-list-item.css';

const MAX_STRING_LENGTH = 39;

const BookListItem = ({ book, onAddedToCart }) => {
  const { id, title, author, price, coverImg } = book;

  const croppedTitle = title.length > MAX_STRING_LENGTH
   ?
   title.slice(0, MAX_STRING_LENGTH + 1) + `...`
   :
   title;

  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={ coverImg } alt={ title } />
      </div>
      <div className="book-details">
        <Link
          to={`/book/${id}`}
          className="book-title"
          title={title}
        >{croppedTitle}</Link>

        <div className="book-author">{author}</div>

        <div className="book-price">${price}</div>

        <button
          onClick={onAddedToCart}
          className="btn btn-info add-to-cart"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default BookListItem;

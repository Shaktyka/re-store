import React, { Fragment } from 'react';

import './book-list-item';

const BookListItem = ({ book }) => {
  const { title, author, id } = book;

  return (
    <Fragment>
      <span>{ title }</span>
      <span>{ author }</span>
    </Fragment>
  );
};

export default BookListItem;

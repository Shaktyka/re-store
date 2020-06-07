import React from 'react';
import BookListItem from '../book-list-item/';

import './book-list';

// Как только он загружается, он запрашивает данные
class BookList extends React.Component {

  render() {
  	const { books } = this.props;

    return (
      <ul>
        {
          books.map((book) => {
            return (
              <li key={ book.id } id={ book.id } >
                <BookListItem book={ book } />
              </li>
            );
          })
        }
      </ul>
    );
  };
};

export default BookList;

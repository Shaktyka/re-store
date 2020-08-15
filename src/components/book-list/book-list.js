import React from 'react';

import { connect } from 'react-redux'; // чтобы подключиться к редакс-стору
import withBookstoreService from '../hoc';
import { booksLoaded } from '../../actions/';
import { compose } from '../../utils/';

import BookListItem from '../book-list-item/';
import Spinner from '../spinner/';

import './book-list.css';

// Как только он загружается, он запрашивает данные
class BookList extends React.Component {

  componentDidMount() {
    // получаем данные
    const { bookstoreService, booksLoaded } = this.props;
    bookstoreService.getBooks()
      .then((data) => {
        // передаём данные в стор
        booksLoaded(data);
      });
  };

  render() {
  	const { books, loading } = this.props;

    if (loading) {
      return <Spinner />
    }

    return (
      <ul className="book-list">
        {
          books.map((book) => {
            return (
              <li
                key={ book.id }
                id={ book.id }
                className="book-list-item"
              >
                <BookListItem book={ book } />
              </li>
            );
          })
        }
      </ul>
    );
  };
};

const mapStateToProps = ({ books, loading }) => {
  return { books, loading };
};

const mapDispatchToProps = {
  booksLoaded
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);

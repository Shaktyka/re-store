import React from 'react';

import { connect } from 'react-redux'; // чтобы подключиться к редакс-стору
import withBookstoreService from '../hoc';
import { booksLoaded, booksRequested, booksError } from '../../actions/';
import { compose } from '../../utils/';

import BookListItem from '../book-list-item/';
import Spinner from '../spinner/';
import ErrorIndicator from '../error-indicator/';

import './book-list.css';

// Как только он загружается, он запрашивает данные
class BookList extends React.Component {

  componentDidMount() {
    this.props.fetchBooks();
  };

  render() {
  	const { books, loading, error } = this.props;

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />;
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

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {bookstoreService} = ownProps;

  return {
    fetchBooks: () => {
      dispatch(booksRequested());

      bookstoreService.getBooks()
        .then((data) => {
          // передаём данные в стор
          dispatch(booksLoaded(data));
        })
        .catch((error) => {
          // обрабатываем ошибку
          dispatch(booksError(error));
        });
    }
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);

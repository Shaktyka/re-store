import React from 'react';

import { connect } from 'react-redux';
import withBookstoreService from '../hoc';
import { fetchBooks, bookAddedToCart } from '../../actions/';
import { compose } from '../../utils/';

import BookListItem from '../book-list-item/';
import Spinner from '../spinner/';
import ErrorIndicator from '../error-indicator/';

import './book-list.css';

const BookList = ({books, onAddedToCart}) => {
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
              <BookListItem
                book={ book }
                onAddedToCart={() => onAddedToCart(book.id)}
              />
            </li>
          );
        })
      }
    </ul>
  );
};

// Как только он загружается, он запрашивает данные
class BookListContainer extends React.Component {

  componentDidMount() {
    this.props.fetchBooks();
  };

  render() {
  	const { books, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} onAddedToCart={onAddedToCart} />
  };
};

const mapStateToProps = ({bookList}) => {
  const { books, loading, error } = bookList;
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {bookstoreService} = ownProps;

  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);

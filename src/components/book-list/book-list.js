import React from 'react';
import BookListItem from '../book-list-item/';
import { connect } from 'react-redux'; // чтобы подключиться к редакс-стору

import withBookstoreService from '../hoc';
import { booksLoaded } from '../../actions/';
import { compose } from '../../utils/';

import './book-list.css';

// Как только он загружается, он запрашивает данные
class BookList extends React.Component {

  componentDidMount() {
    // получить данные
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();

    // передать действия в стор
    this.props.booksLoaded(data);
  };

  render() {
  	const { books } = this.props;
    console.log(books); // пустой массив

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

const mapStateToProps = ({ books }) => {
  return { books };
};

const mapDispatchToProps = {
  booksLoaded
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);

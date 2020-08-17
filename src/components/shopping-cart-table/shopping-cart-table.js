import React from 'react';

import {connect} from 'react-redux';
import {bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart} from '../../actions/';

import './shopping-cart-table.css';

const ShoppingCartTable = (props) => {
  const {items, total, onIncrease, onDecrease, onDelete} = props;

  const totalSum = items.reduce((acc, item) => {
    return acc + item.total;
  }, 0);

  const renderRow = (item, i) => {
    return (
      <tr className="t-row" key={item.id}>
        <td>{i + 1}</td>
        <td>{item.title}</td>
        <td>{item.count}</td>
        <td>${item.total}</td>
        <td className="td-actions">
          <button
            onClick={() => onDecrease(item.id)}
            className="btn btn-outline-warning btn-sm"
          >
            <i className="fa fa-minus-circle" />
          </button>
          <button
            onClick={() => onIncrease(item.id)}
            className="btn btn-outline-success btn-sm"
          >
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => onDelete(item.id)}
            className="btn btn-outline-danger btn-sm"
          >
            <i className="fa fa-trash-o" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table>
        <thead>
          <tr className="t-row">
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {
            items.map((item, i) => renderRow(item, i))
          }
        </tbody>
      </table>

      <div className="total">
        Total: ${totalSum}
      </div>
    </div>
  );
};

const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

const mapDispatchToProps = {
  onDecrease: bookRemovedFromCart,
  onIncrease: bookAddedToCart,
  onDelete: allBooksRemovedFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);

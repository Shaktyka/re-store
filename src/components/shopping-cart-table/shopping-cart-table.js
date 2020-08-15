import React from 'react';
import './shopping-cart-table.css';

const ShoppingCartTable = () => {
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
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr className="t-row">
            <td>1</td>
            <td>Site Reliability Engeneering</td>
            <td>2</td>
            <td>40</td>
            <td className="td-actions">
              <button className="btn btn-outline-warning">
                <i className="fa fa-minus-circle" />
              </button>
              <button className="btn btn-outline-success">
                <i className="fa fa-plus-circle" />
              </button>
              <button className="btn btn-outline-danger">
                <i className="fa fa-trash-o" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="total">
        Total: $201
      </div>
    </div>
  );
};

export default ShoppingCartTable;

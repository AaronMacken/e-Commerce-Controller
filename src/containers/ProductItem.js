import React, { Component } from "react";
import "./ProductItem.css";
import { Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';
import TransitionsModal from './TransitionsModal';

class ProductItem extends Component {
  render() {
    const { img, price, title, index } = this.props;
    return (

      <div className="cart-item" key={index}>
        <img className="cart-item-img" src={`http://localhost:3001/${img}`} alt={title}></img>

        <div className="cart-item-col">
          <Typography variant="h6" color="primary" display="inline">
            Item Name:{" "}
            {
              <Typography  color="textPrimary" display="inline">
                {title}
              </Typography>
            }
          </Typography>
          <Typography variant="h6" color="primary" display="inline">
            Item Price:{" "}
            {
              <Typography color="textPrimary" display="inline">
                ${price.toFixed(2)}
              </Typography>
            }
          </Typography>
        </div>
        <div className="buttonsContainer">

          <Link to={`/products/edit/${index}`}>
            <i className="far fa-edit"></i>
          </Link>
          <TransitionsModal index={index} />
        </div>
      </div>
    );
  }
}
export default ProductItem;

import React, { Component } from "react";
import "./ProductItem.css";
import { Typography } from "@material-ui/core";
import { updateProduct } from "../store/actions/products";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import TransitionsModal from './TransitionsModal';

class ProductItem extends Component {
  render() {
    const { img, price, title, index } = this.props;
    return (

      <div className="cart-item" key={index}>
        <img className="cart-item-img" src={`${img}`}></img>

        <div className="cart-item-col">
          <Typography variant="h6" color="primary" display="inline">
            Item Name:{" "}
            {
              <Typography variant="h6" color="textPrimary" display="inline">
                {title}
              </Typography>
            }
          </Typography>
          <Typography variant="h6" color="primary" display="inline">
            Item Price:{" "}
            {
              <Typography variant="h6" color="textPrimary" display="inline">
                ${price.toFixed(2)}
              </Typography>
            }
          </Typography>
        </div>
        <div className="buttonsContainer">

          <Link to={`/products/edit/${index}`}>
            <i class="far fa-edit"></i>
          </Link>
          <TransitionsModal index={index} />
        </div>
      </div>
    );
  }
}
export default ProductItem;

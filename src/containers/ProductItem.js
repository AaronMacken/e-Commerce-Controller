import React, { Component } from "react";
import "./ProductItem.css";
import CloseBtn from "../components/CloseBtn";
import { Typography } from "@material-ui/core";
import { deleteProduct } from "../store/actions/products";
import { connect } from "react-redux";

class ProductItem extends Component {
  render() {
    const { img, price, title, index, deleteProduct } = this.props;
    let removeItem = () => {
      deleteProduct(index);
    };
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
          <i class="far fa-edit"></i>
          <CloseBtn classname="cart-item-close" onClick={removeItem}>
            X
          </CloseBtn>
        </div>
      </div>
    );
  }
}

// export default ProductItem;

export default connect(null, { deleteProduct })(ProductItem);

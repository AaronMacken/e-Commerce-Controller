import React, { Component } from "react";
import "./ProductItem.css";
import CloseBtn from "../components/CloseBtn";
import { Typography, Divider, Box } from "@material-ui/core";
// import CloseBtn from "../../components/CloseBtn/CloseBtn";
// import { connect } from "react-redux";
// import { removeItem, increaseQty, decreaseQty } from "../../store/actions/itemActions";

class CartItem extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.removeFromCart = this.removeFromCart.bind(this);
  //     this.increaseQuantity = this.increaseQuantity.bind(this);
  //     this.decreaseQuantity = this.decreaseQuantity.bind(this);
  //   }

  // calls action from props that removes an index from the array
  //   removeFromCart() {
  //     this.props.removeItem(this.props.index);
  //   }

  //   increaseQuantity() {
  //     this.props.increaseQty(this.props.index);
  //   }

  //   decreaseQuantity() {
  //     this.props.decreaseQty(this.props.index);
  //   }

  render() {
    const { title, price, img, index } = this.props;
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
          <CloseBtn classname="cart-item-close">X</CloseBtn>
        </div>
      </div>
    );
  }
}

export default CartItem;
// export default connect(null, { removeItem, increaseQty, decreaseQty })(CartItem);

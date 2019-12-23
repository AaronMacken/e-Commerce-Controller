import React, { Component } from "react";
import "./CartItem.css";
import {Typography, Divider} from '@material-ui/core';
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
            <Typography variant="h6">{title}</Typography>
            <Typography variant="h6">${(price).toFixed(2)}</Typography>
        </div>
        {/* <CloseBtn className="cart-item-close" onClick={this.removeFromCart}>
          X
        </CloseBtn> */}
      </div>
    );
  }
}

export default CartItem;
// export default connect(null, { removeItem, increaseQty, decreaseQty })(CartItem);

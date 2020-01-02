import React, { Component } from "react";
import ProductForm from "../components/ProductForm";
import { apiCall } from "../services/api";

export default class ProductFormEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productName: "",
      price: null
    };
  }

  // set state of this component to the values of the redux document that rendered this component
  // state will be sent to the product form as props for place holders on input value
  componentDidMount() {
    let path = this.props.match.params.product_id;
    try {
      apiCall("get", `/products/${path}`).then(formData => {
        this.setState({ productName: formData.title, price: formData.price });
      });
    } catch {
      console.log("error");
    }
  }
  render() {
    return <ProductForm {...this.props} updateFormData={[this.state.productName, this.state.price]} />;
  }
}

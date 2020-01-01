import React, { Component } from 'react';
import ProductForm from '../components/ProductForm';

export default class ProductFormEdit extends Component {
    render() {
        let { formData } = this.props;
        return (
            <ProductForm {...this.props} formData />
        )
    }
}

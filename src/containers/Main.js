import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import Products from './Products';
import ProductForm from '../components/ProductForm';
import Login from '../components/Login';

export default class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={props => <Login {...props} />} />
                <Route exact path="/products" render={props => <Products {...props} />} />
                <Route exact path="/products/new" render={props => <ProductForm {...props} />} />
            </Switch>

        )
    }
}

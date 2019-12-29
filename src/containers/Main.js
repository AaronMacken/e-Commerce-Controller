import React, { Component } from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Products from "./Products";
import ProductForm from "../components/ProductForm";
import AuthForm from "./AuthForm";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/error";
import withAuth from "../hocs/withAuth";

const Main = props => {
  const { authUser, errors, removeError, currentUser } = props;
  return (
    <Switch>
      {/* Render a component along with the react router props */}
      <Route exact path="/">
        <Redirect to="/signin" />
      </Route>

      <Route
        exact
        path="/signin"
        render={props => {
          return (
            <AuthForm
              removeError={removeError}
              // errors coming from mapStateToProps
              errors={errors}
              onAuth={authUser}
              buttonText="Sign in"
              heading="Sign in"
              {...props}
            />
          );
        }}
      />
      {/* This route contains a signUp prop - used for displaying additional fields on the authform component */}
      <Route
        exact
        path="/signup"
        render={props => {
          return (
            <AuthForm
              removeError={removeError}
              errors={errors}
              onAuth={authUser}
              signUp
              buttonText="Sign up"
              heading="Admin sign up"
              {...props}
            />
          );
        }}
      />
      {/* when this path is reached, a higher order component will be loaded 
  (a function that wraps a component) */}
      <Route exact path="/products" component={withAuth(Products)} />
      <Route ecact path="/products/new" component={withAuth(ProductForm)} />
    </Switch>
  );
};

// Redux state now made vailable as props
function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  };
}

// pass in auth user as mapDispatchToProps
export default withRouter(
  connect(mapStateToProps, { authUser, removeError })(Main)
);

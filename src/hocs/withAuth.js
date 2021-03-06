import React, { Component } from "react";
import { connect } from "react-redux";

// this higher order component will ensure a user is logged in before they see the following component
// if user is logged in, show component

// function that gives us a class which will return a component
export default function withAuth(ComponentToBeRendered) {
  class Authenticate extends Component {
    // if user is not logged in, use react router to push to / - sign in page -
    componentDidMount() {
      if (!this.props.isAuthenticated) {
        this.props.history.push("/");
      }
    }
    // if component updates and still not authenticated, push to sign in again
    componentDidUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.props.history.push("/");
      }
    }
    // otherwise, render the new component with any props
    render() {
      return <ComponentToBeRendered {...this.props} />;
    }
  }
  function mapStateToProps(state) {
    return {
      isAuthenticated: state.currentUser.isAuthenticated
    };
  }
  return connect(mapStateToProps)(Authenticate);
}

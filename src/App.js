import React, { Component } from 'react';
import './App.css';
import LoginContainer from "./containers/LoginContainer";
import { connect } from 'react-redux';
import {userLoginSuccess} from "./actions/userActions";
import MainRouter from "./router/mainRouter";


class App extends Component {
  render(){
    if(this.props.isLoggedIn === false) {
      return (
        <LoginContainer
          _isLoggedIn={this.props._isLoggedIn}
        />
      )
    } else {
      return(
        <MainRouter/>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    _isLoggedIn: (payload)=> {
      dispatch(userLoginSuccess(payload))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react';
import LoginComponent from "../components/loginComponent";
import {changeTextField} from "../actions/userActions";
import {connect} from "react-redux";

class LoginContainer extends Component {
  _handleSubmit = () =>{
    if((this.props.username === this.props.rightUsername)&&(this.props.password === this.props.rightPassword)){
      this.props._isLoggedIn();
    }
  };

  _usernameChange = (username) => {
    this.props._changeTextField({field: 'username', value: username});
  };

  _passwordChange = (password) => {
    this.props._changeTextField({field: 'password', value: password});
  };

  render(){
    return(
      <LoginComponent
        username={this.props.username}
        password={this.props.password}
        _handleSubmit={this._handleSubmit}
        _usernameChange={this._usernameChange}
        _passwordChange={this._passwordChange}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return{
    username: state.user.username,
    password: state.user.password,
    rightUsername: state.user.rightUsername,
    rightPassword: state.user.rightPassword
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    _changeTextField: (payload) => {
      dispatch(changeTextField(payload))
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer);
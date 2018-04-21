import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

class LoginComponent extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to Coffee Shop Demo</h1>
        </header>
        <Card className="login-card">
          <form>
          <CardContent>
            <Typography className="title">
              Login
            </Typography>
            <TextField
              required
              id="username"
              label="UserName"
              className="username-field"
              margin="normal"
              value={this.props.username}
              onChange={(evt) => {this.props._usernameChange(evt.target.value)}}
            />
            <TextField
              id="password-input"
              label="Password"
              className="password-field"
              type="password"
              autoComplete="current-password"
              margin="normal"
              value={this.props.password}
              onChange={(evt) => {this.props._passwordChange(evt.target.value)}}
            />
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => {this.props._handleSubmit()}}
            >Log in</Button>
          </CardActions>
          </form>
        </Card>
      </div>
    );
  }
}

LoginComponent.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  _handleSubmit: PropTypes.func.isRequired,
  _usernameChange: PropTypes.func.isRequired,
  _passwordChange: PropTypes.func.isRequired,
};

export default LoginComponent;
import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

class LoginPage extends Component {
  constructor() {
    super();
    
    this.state = {
      loading: false
    };
  }

  render() {
    return (
      <div id='LoginPage' className='d-flex flex-column justify-content-center align-self-center mx-auto'>
        <a className='button btn btn-dark' href='/auth/google'>Login/Sign-Up</a>
      </div>
    );
  }
}

export default LoginPage;


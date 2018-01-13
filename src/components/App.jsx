import React, { Component } from 'react';
import * as Users from '../JSON/users.json';
import {Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login:'',
      password:''
    }
  }

  signIn() {
    
  }

  render() {
    return (
      <div className="App">
      <FormGroup>
        <ControlLabel>Sign IN</ControlLabel>
        <FormControl
        type='text'
        placeholder='Enter login'
        onChange={event => this.setState({login: event.target.value})}
        ></FormControl>
        <FormControl
        type='password'
        placeholder='Enter password'
        onChange={event => this.setState({password: event.target.value})}
        ></FormControl>
        <Button onClick={() => this.signIn()}>Sign In</Button>
      </FormGroup>
      </div>
    );
  }
}

export default App;

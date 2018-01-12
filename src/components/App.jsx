import React, { Component } from 'react';
import {Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

//import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login:'',
      password:''
    }
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
        <Button>Sign In</Button>
      </FormGroup>
      </div>
    );
  }
}

export default App;

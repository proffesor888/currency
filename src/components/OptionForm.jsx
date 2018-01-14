import React, { Component } from 'react';
import {connect} from 'react-redux';
import {add_user, delete_user} from '../actions/actions';
import {Button, Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

class OptionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            username:'',
            email:''
        }
    }
    addUser() {
        this.props.add_user(Object.assign({}, this.state));
    }
    removeUser() {
        this.props.delete_user(this.state.email);
    }
    render(){
        return (
            <div>
                <Form>
                    <FormGroup>
                        <ControlLabel>Add new user</ControlLabel>
                        <FormControl
                            className='options'
                            type='text'
                            placeholder='Enter name'
                            onChange={event => this.setState({name: event.target.value})}
                        ></FormControl>
                        <FormControl
                            className='options'
                            type='text'
                            placeholder='Enter preferable user name'
                            onChange={event => this.setState({username: event.target.value})}
                        ></FormControl>
                        <FormControl
                            className='options'
                            type='text'
                            placeholder='Enter your email'
                            onChange={event => this.setState({email: event.target.value})}
                        ></FormControl>
                        <Button onClick={() => this.addUser()}>Add user</Button>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Delete user by email</ControlLabel>
                        <FormControl
                            className='options'
                            type='text'
                            placeholder='email'
                            onChange={event => this.setState({email: event.target.value})}
                        ></FormControl>
                        <Button onClick={() => this.removeUser()}>Delete user</Button>
                    </FormGroup>
                </Form>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return (
        state
    )
}

export default connect(mapStateToProps, {add_user, delete_user})(OptionForm);
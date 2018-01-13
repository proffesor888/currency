import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as Users from '../JSON/users.json';
import {add_user} from '../actions/actions';
import OptionForm from '../components/OptionForm';
import {Table} from 'react-bootstrap';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            username:'',
            email:''
        }
    }
    componentDidMount() {
        Users.map((item, index) => {
            this.props.add_user(Object.assign({}, item))
        })

    }

    render() {
        console.log(Users);
        console.log(this.props);
        return (
            <div>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>User Name</th>
                            <th>Email</th>   
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.state.map((item, index) => {
                        return (
                            <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
                </Table>
                <OptionForm />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps, {add_user})(User);
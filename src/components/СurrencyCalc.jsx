import React, {Component} from 'react';
import {Button, Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

class CurrencyCalc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enteredValue: undefined,
            curUser:'',
            curCount:'',
            countValue: undefined
        }
    }

    count() {
        let {curUser, curCount} = this.state;
        const urlBase = `https://api.fixer.io/latest?base=${curUser}`;
        console.log(urlBase);
        let receivedData = fetch(urlBase, {method: 'GET'});
        receivedData
        .then((data) => data.json())
        .then((data) => {
            //console.log(data)
            let value = data.rates[this.state.curCount] * this.state.enteredValue;
            this.setState({countValue: value});
        })

    }
    render() {
        return (
            <div>
                <h3>Currency Calculator</h3>
                <Form>
                    <FormGroup>
                        <ControlLabel>Enter your sum</ControlLabel>
                            <FormControl
                            //type='text'
                            placeholder='Enter value'
                            onChange={event => this.setState({enteredValue: event.target.value})}
                            >
                            </FormControl>
                            <FormGroup>
                                <ControlLabel>Choose your currency</ControlLabel>
                                <select onChange={event => this.setState({curUser: event.target.value})}>
                                    <option>USD</option>
                                    <option>EUR</option>
                                    <option>RUB</option>
                                </select>
                                <ControlLabel>Desired currency</ControlLabel>
                                <select onChange={event => this.setState({curCount: event.target.value})}>
                                    <option>USD</option>
                                    <option>EUR</option>
                                    <option>RUB</option>
                                </select>
                                <Button onClick={() => this.count()}>Count</Button>
                                <p className='answer'>{this.state.countValue}</p>
                            </FormGroup>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default CurrencyCalc;
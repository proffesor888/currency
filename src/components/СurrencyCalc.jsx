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
    //request to the API to get currency JSON
    //counting requested value
    count() {
        let {curUser, curCount} = this.state;
        const urlBase = `https://api.fixer.io/latest?base=${curUser}`;
        console.log(urlBase);
        let receivedData = fetch(urlBase, {method: 'GET'});
        receivedData
        .then((data) => data.json())
        .then((data) => {
            let value = data.rates[this.state.curCount] * this.state.enteredValue;
            value = value.toFixed(2);
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
                            className='curStyle-bar'
                            placeholder='Enter value'
                            onChange={event => this.setState({enteredValue: event.target.value})}
                            >
                            </FormControl>
                            <FormGroup>
                                <ControlLabel className='curStyle'>Choose your currency</ControlLabel>
                                <select className='curStyle' onChange={event => this.setState({curUser: event.target.value})}>
                                    <option></option>
                                    <option>USD</option>
                                    <option>EUR</option>
                                    <option>RUB</option>
                                </select>
                                <ControlLabel className='curStyle'>Desired currency</ControlLabel>
                                <select className='curStyle' onChange={event => this.setState({curCount: event.target.value})}>
                                    <option></option>
                                    <option>USD</option>
                                    <option>EUR</option>
                                    <option>RUB</option>
                                </select>
                            </FormGroup>
                            <div className='block'>
                                <Button className='block-count' onClick={() => this.count()}>Count</Button>
                                <p className='block-p'>{this.state.countValue}{this.state.curCount}</p>
                            </div>
                        </FormGroup>
                </Form>
            </div>
        )
    }
}

export default CurrencyCalc;
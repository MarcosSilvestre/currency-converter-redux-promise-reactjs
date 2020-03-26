import React, { Component } from 'react';
import CurrencyList from './CurrencyList';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { convertCurrencies} from '../actions';

class Form extends Component {

    constructor(props){
        super(props);

        this.onValueChange = this.onValueChange.bind(this);
        this.onValueChangeTo = this.onValueChangeTo.bind(this);
        this.send = this.send.bind(this);

        this.state = {
            converte: {
                from: '',
                to: '',
                value: 0
            }
        }
    }

    onValueChange(e){
        this.setState({
            value: e.target.value
        })
    }

    onValueChangeTo(e){
        this.setState({
            to: e.target.value
        })
    }

    send(){

        const { to, value } = this.state;
        
        const dados = {
            from: 'USD',
            to: to,
            value: value,
        }

        this.props.convertCurrencies(dados)
    }

    render(){
        return (
            <form>
                <div className="form-group">
                    <div className='input-group input-group-lg'>
                        <input type='text' className='form-control' onChange={(e) => this.onValueChange(e)} />
                    </div>
                </div>
    
                <div className='form-row'>
                    <div className='form-group col-md-6'>
                        <label htmlFor='formSelectDE'>From:</label>
                        
                        <select className='form-control'>
                            <option value='USD' title='United States Dollar'>USD</option>
                        </select>
                    </div>
                    <div className='form-group col-md-6'>
                        <label htmlFor='formSelectPARA'>To:</label>
                        <CurrencyList origem='para' onValueChange={this.onValueChangeTo}/>
                    </div>
                </div>
    
                <div className='form-group'>
                    <button type='button' onClick={this.send} className='btn btn-primary btn-lg btn-block'>
                        Converter
                    </button>
                </div>
                
            </form>
        )
    }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({convertCurrencies}, dispatch);
  
  export default connect(null, mapDispatchToProps)(Form);
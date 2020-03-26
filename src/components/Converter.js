import React from 'react';
import Form from './Form';
import {connect} from 'react-redux';

const Converter = props => {
    
    return (
        <div className='content'>
            <div className='row justify-content-md-center'>
                <div className='card text-center w-50'>
                    <div className='card-header bg-info '>Matsuda`s stockbroker</div>
                    <div className='card-boody'>
                        <Form/>
                    </div>
                    <div className='card-footer text-light bg-dark'>
                        { props.conversor.quotes && props.conversor.quotes[Object.keys(props.conversor.quotes)[0]]}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    conversor: state.conversor
});

export default connect(mapStateToProps)(Converter);
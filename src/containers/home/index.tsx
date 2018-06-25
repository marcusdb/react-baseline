import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';

import { decrement, decrementAsync, increment, incrementAsync } from '../../modules/counter';
import { ping } from '../../modules/ping';

const Home = (props:any) => (
    <div>
        <h1>Home bla2</h1>
        <p>Count: {props.count}</p>

        <p>
            <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
            <button onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</button>
        </p>

        <p>
            <button onClick={props.decrement} disabled={props.isDecrementing}>Decrementing</button>
            <button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
        </p>
        <h1>is pinging: ---{props.isPinging?'yes':'no'}---</h1>
        <p><button onClick={props.ping}>ping</button></p>
        <p><button onClick={props.changePage}>Go to about page via redux</button></p>
        
    </div>
)

const mapStateToProps = (state:any) => ({
    count: state.counter.count,
    isDecrementing: state.counter.isDecrementing,
    isIncrementing: state.counter.isIncrementing,
    
    isPinging: state.ping.isPinging
})

const mapDispatchToProps = (dispatch:any) => bindActionCreators({
    changePage: () => push('/about'),
    decrement,
    decrementAsync,
    increment,
    incrementAsync,
    
    ping
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
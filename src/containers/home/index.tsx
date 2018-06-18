import * as React from 'react';

import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    increment,
    incrementAsync,
    decrement,
    decrementAsync
} from '../../modules/counter'

import {
    ping    
} from '../../modules/ping'

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
        <p><button onClick={() => props.ping()}>ping</button></p>
        <p><button onClick={() => props.changePage()}>Go to about page via redux</button></p>
    </div>
)

const mapStateToProps = (state:any) => ({
    count: state.counter.count,
    isIncrementing: state.counter.isIncrementing,
    isDecrementing: state.counter.isDecrementing,
    isPinging: state.ping.isPinging
})

const mapDispatchToProps = (dispatch:any) => bindActionCreators({
    ping,
    increment,
    incrementAsync,
    decrement,
    decrementAsync,
    changePage: () => push('/about')
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
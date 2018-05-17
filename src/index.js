import React from 'react'
import ReactDOM from 'react-dom'


import { Provider } from 'react-redux'


import { Route } from 'react-router'

import { ConnectedRouter } from 'react-router-redux'
import registerServiceWorker from './registerServiceWorker';

import store, { history } from './store'


const Home = () => (
    <div>
        <h2>Home</h2>
        <a href='/about'>go to about</a>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
        <a href='/'>go to home</a>
    </div>
)



// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

ReactDOM.render(
    <Provider store={store}>
        { /* ConnectedRouter will use the store from Provider automatically */}
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />

            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker();




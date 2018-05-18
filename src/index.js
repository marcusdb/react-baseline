import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import registerServiceWorker from './registerServiceWorker';
import store, { history } from './store'
import Home from './containers/home'
import {Link } from "react-router-dom";

const About = () => (
    <div>
        <h2>About</h2>
        <Link to='/'>go to home</Link>
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
if (module.hot) {
    module.hot.accept();
  }
registerServiceWorker();

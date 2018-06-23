import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import Home from './containers/home';
import registerServiceWorker from './registerServiceWorker';
import store, { history } from './store';

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
                <Route exact={true} path="/" component={Home} />
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

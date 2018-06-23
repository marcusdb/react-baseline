import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';

import rootReducer, { rootEpic } from './modules';

const epicMiddleware = createEpicMiddleware();
// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history), epicMiddleware]

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}
// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

epicMiddleware.run(rootEpic);


export default createStore(rootReducer, initialState, composedEnhancers);
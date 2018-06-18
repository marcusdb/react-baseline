import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer, { rootEpic } from './modules';
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware(rootEpic);
// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history), epicMiddleware]

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window['__REDUX_DEVTOOLS_EXTENSION__'];

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}
// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);


export default createStore(rootReducer, initialState, composedEnhancers);
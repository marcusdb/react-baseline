import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { combineEpics } from 'redux-observable';
import { pingReducer, pingEpic } from './ping';
import counter from './counter'

export const rootEpic = combineEpics(
    pingEpic,
    //fetchUserEpic
);

export default combineReducers({
    router: routerReducer,
    counter,
    ping: pingReducer
});
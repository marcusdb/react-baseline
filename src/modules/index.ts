import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import { pingEpic, pingReducer } from './ping';


export const rootEpic = combineEpics(
    pingEpic,
  
);

export default combineReducers({
    ping: pingReducer,
    router: routerReducer
    
}); 
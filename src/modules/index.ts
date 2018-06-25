import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import counterReducer from './counter';
import { pingEpic, pingReducer } from './ping';


export const rootEpic = combineEpics(
    pingEpic,
  
);

export default combineReducers({
    counter:counterReducer,
    ping: pingReducer,
    router: routerReducer,
    
    
}); 
import { Epic, ofType } from 'redux-observable';
import { delay, mapTo } from 'rxjs/operators';
import { createAction, getType } from 'typesafe-actions';



export interface Action {
  type: string;
  payload?: {};

}


// type only
export const ping = createAction('ping');
const pong = createAction('pong');

export const pingEpic: Epic<Action> = (action$) =>
  action$.pipe(ofType(getType(ping)),
    delay(1000), // Asynchronously wait 1000ms then continue
    mapTo(pong()));

export interface MapState {
  isPinging: boolean;
}

export const pingReducer = (state: MapState = { isPinging: false }, action: Action): MapState => {
  switch (action.type) {
    case 'PING':
      return { isPinging: true };
    case 'PONG':
      return { isPinging: false };

    default:
      return state;
  }
};


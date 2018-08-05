import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      if(action.payload.data=='undefined')
      {
        return Object.assign({}, state, {
          error: {
              code: "INVALID TODO ACTION",
              message: "The todo action received was empty, need a .text property",
              action
          }
       });
      }
      else{
      return [action.payload.data, ...state];
      }
  }

  return state;
}

import {createAction, createReducer} from 'redux-starter-kit'

export const setEvent = createAction("SET_EVENT");
export const setSubEvent = createAction("SET_SUBEVENT");
export const setResponse = createAction("SET_RESPONSE");


const rootReducer = createReducer({event: null, subevent: null, response: null}, {
    [setEvent] : (state, action) => {
        state.event = action.payload;
    },
    [setSubEvent] : (state, action) => {
        state.subevent = action.payload;
    },
    [setResponse] : (state, action) => {
        state.response = action.payload;
    }
});

export default rootReducer
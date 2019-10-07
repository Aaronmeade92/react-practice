import { FETCH } from '../actions/Data-actions.js';

let initialState = [];

export default ( state = initialState, action ) => {

    let {type, payload} = action;

    switch(type) {
        case FETCH: return [...state, ...payload];
        default: return state;
    };
};
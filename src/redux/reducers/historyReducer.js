import { HISTORY } from "../actions/actionTypes.js";

const initialValue = [];

const historyReducer = (state = initialValue, action) => {
    switch (action.type) {
        case HISTORY:
            return [...state,action.payload]
        default:
            return state
    }
}

export default historyReducer;
import { HISTORY } from "./actionTypes.js";

export const addToHistory = (history) => { 
    return {
        type: HISTORY,
        payload : history
    }
}
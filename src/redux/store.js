import historyReducer from "./reducers/historyReducer.js"; 
import { createStore } from "redux";

const store = createStore(historyReducer);

export default store;
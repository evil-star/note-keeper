import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import notesReducer from "./reducers/noteReducer";

let rootReducer = combineReducers({
    notes: notesReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;

export default store;
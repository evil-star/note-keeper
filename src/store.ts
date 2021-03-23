import { combineReducers, createStore } from "redux";
import notesReducer from "./reducers/noteReducer";

let rootReducer = combineReducers({
    notes: notesReducer,
});

let store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;

export default store;
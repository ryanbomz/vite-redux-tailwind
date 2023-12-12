import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import counterReducer from "../reducer/counterSlice"
import todosReducer from "../reducer/todoSlice"


const rootReducer = combineReducers({
 counter: counterReducer,
 todos: todosReducer,
});

export const store = configureStore({
 reducer: rootReducer,
})
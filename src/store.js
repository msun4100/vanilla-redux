import { createStore } from "redux";
import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

/* const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}; */

// toolkit을 쓰면 mutate를 허용, toolkit이 기존 덮어쓰기? 기능을 대신해줌
// state object를 mutate 해주거나, or new state obj를 리턴하면 됨
// === addToDo는 mutation, deleteToDo는 새로운 State 리턴
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    state.filter(todo => todo.id !== action.payload)
});

const store = configureStore({ reducer });

// store.subscribe() //store 변동사항을 sub 하기 위해 react-redux가 필요

export const actionCreators = {
  addToDo,
  deleteToDo
};

export default store;

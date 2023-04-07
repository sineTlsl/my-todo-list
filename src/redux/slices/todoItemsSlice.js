import { createSlice } from "@reduxjs/toolkit";
import todoData from "../../data/todoData";
import { PURGE } from "redux-persist";

let todoItems = createSlice({
  name: "todoItems",
  initialState: todoData || "",

  reducers: {
    addTodo: (state, action) => {
      // yyyy-mm-dd 형식으로 변환
      let today = new Date();

      let todayYear = today.getFullYear();
      let todayMonth =
        today.getMonth() + 1 < 10
          ? "0" + (today.getMonth() + 1)
          : today.getMonth() + 1;
      let todayDate =
        today.getDate() < 10 ? "0" + today.getDate() : today.getDate();

      state.push({
        id: state[state.length - 1].id + 1,
        title: action.payload,
        date: todayYear + "-" + todayMonth + "-" + todayDate,
        time: null,
        description: null,
        process: "TODO",
      });
    },

    removeTodo: (state, action) => {
      // return state.filter((el) => el.id !== action.payload);
      let findIdx = state.findIndex((el) => el.id === action.payload);
      return [...state.slice(0, findIdx), ...state.slice(findIdx + 1)];
    },
    processTodo: (state, action) => {
      // process 바꾸기
      state.map((el) => {
        if (el.id === action.payload) {
          return el.process === "DONE"
            ? (el.process = "TODO")
            : (el.process = "DONE");
        }
      });
    },
    updateTodo: (state, action) => {
      let todo = action.payload;
      state.map((el) => {
        if (el.id === action.payload.id) {
          return (
            (el.title = todo.title),
            (el.date = todo.date),
            (el.time = todo.time),
            (el.process = todo.process),
            (el.description = todo.description)
          );
        }
      });
    },
  },
  //초기화하고 싶은 state가 있는 slice마다 아래를 추가해야한다.
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => todoData);
  },
});

export let { addTodo, removeTodo, processTodo, updateTodo } = todoItems.actions;
export default todoItems;

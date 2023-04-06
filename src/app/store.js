import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../features/taskList/listSlice";

export const store = configureStore({
  reducer: {
    taskList: listReducer,
  },
});

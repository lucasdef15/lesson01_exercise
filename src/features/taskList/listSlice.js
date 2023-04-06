import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 0,
      task: "new task",
      checked: false,
    },
  ],
};

export const listSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    addTask: (state, action) => {
      if (action.payload === "") {
        return;
      } else {
        const newId = state.items.length;
        const newItem = {
          id: newId,
          task: action.payload,
          checked: false,
        };
        return {
          ...state,
          items: [...state.items, newItem],
        };
      }
    },
    deleteTask: (state, action) => {
      const newItems = state.items.filter((item) => item.id !== action.payload);
      return {
        ...state,
        items: newItems,
      };
    },
    onChecked: (state, action) => {
      const selectedItem = state.items.find(
        (item) => item.id === action.payload
      );
      const newItem = {
        ...selectedItem,
        checked: !selectedItem.checked,
      };
      const updatedItems = state.items.map((item) =>
        item.id === action.payload ? newItem : item
      );
      return {
        ...state,
        items: updatedItems,
      };
    },
  },
});

export const { addTask, deleteTask, onChecked } = listSlice.actions;

export default listSlice.reducer;

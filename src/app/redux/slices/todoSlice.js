import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getListCategoriesByPriority } from "../../features/todo/utils/utils";

export const fetchTasks = createAsyncThunk("todo/fetchTasks", async () => {
  const { data } = await axios.get("http://localhost:3300/todos");
  const categories = getListCategoriesByPriority(data);

  return categories;
});

export const createTask = createAsyncThunk(
  "todo/createTask",
  async (task, thunkAPI) => {
    await axios.post("http://localhost:3300/todos", task);
    thunkAPI.dispatch(fetchTasks());
  }
);

export const updateTask = createAsyncThunk(
  "todo/updateTask",
  async (task, thunkAPI) => {
    await axios.put(`http://localhost:3300/todos/${task.id}`, task);
    thunkAPI.dispatch(fetchTasks());
  }
);

export const deleteTask = createAsyncThunk(
  "todo/deleteTask",
  async (id, thunkAPI) => {
    await axios.delete(`http://localhost:3300/todos/${id}`);
    thunkAPI.dispatch(fetchTasks());
  }
);

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    title: "My title",
    highPriorityList: [],
    mediumPriorityList: [],
    lowPriorityList: [],
  },
  reducers: {
    updateTitle: (state, action) => {
      state.title = action.payload;
    },
    getTitle: () => {},
    deleteTitle: () => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.highPriorityList = action.payload.highPriorities;
      state.mediumPriorityList = action.payload.mediumPriorities;
      state.lowPriorityList = action.payload.lowPriorities;
    });
  },
});

// to exports only sync actions.
export const { updateTitle } = todoSlice.actions;

export default todoSlice.reducer;

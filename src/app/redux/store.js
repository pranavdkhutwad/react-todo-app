import { configureStore } from "@reduxjs/toolkit";
import todo from "./slices/todoSlice";

export default configureStore({
  reducer: {
    todo,
  },
});

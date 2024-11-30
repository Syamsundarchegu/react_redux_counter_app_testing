import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../counter/counterSlice";
const store = configureStore({
  reducer: {
    counter:CounterReducer,
  },
});

export default store;

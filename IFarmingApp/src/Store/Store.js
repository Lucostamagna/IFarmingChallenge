import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../Redux/Reducers/formReducer";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;

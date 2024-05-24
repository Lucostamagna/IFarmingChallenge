import { configureStore } from '@reduxjs/toolkit';
import formReducer from './reducers';


const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
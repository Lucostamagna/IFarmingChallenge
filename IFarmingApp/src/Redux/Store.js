import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import formReducer from './Reducers/formReducer';
const rootReducer = combineReducers({
  form: formReducer
});

const store = createStore(rootReducer);

const StoreProvider = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default StoreProvider;

import RootNavigator from './src/Navigator/RootNavigation';
import { StatusBar } from 'react-native';
import StoreProvider from './src/Redux/Store';
import store from './src/Redux/Store';
import { Provider } from 'react-redux';


export default function App() {
  return(
    <>
     <Provider store={store}>
    <RootNavigator/>
    <StatusBar backgroundColor="#222222" />
    </Provider>
    </>
  ) 
  
}

import RootNavigator from './src/Navigator/RootNavigation';
import { StatusBar } from 'react-native';
import StoreProvider from './src/Store/Store';
import store from './src/Store/Store';
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

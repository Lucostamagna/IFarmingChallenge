import RootNavigator from './src/Navigator/RootNavigation';
import { StatusBar } from 'react-native';

export default function App() {
  return(
    <>
    <RootNavigator/>
    <StatusBar backgroundColor="#222222" />
    </>
  ) 
  
}

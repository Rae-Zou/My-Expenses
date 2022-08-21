import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

LogBox.ignoreAllLogs();//Ignore all log notifications

function App() {
  return (
    <MainContainer/>
  );
}

export default App;


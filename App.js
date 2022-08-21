import * as React from 'react';
import MenuBarNavigator from './navigation/MenuBarNavigator';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

LogBox.ignoreAllLogs();//Ignore all log notifications

function App() {
  return (
    <MenuBarNavigator/>
  );
}

export default App;


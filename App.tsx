import React, { useState, useEffect } from 'react';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {
  SafeAreaView,
  Text,
  StatusBar,
  NativeModules,
} from 'react-native';

const App = () => {
  const [value, setValue] = useState('abc')

  useEffect(() => {
    NativeModules.Device.getDeviceName((err: any, name: any) => {
      setValue(name)
    });
  }, [])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>sdsds{value}</Text>
      </SafeAreaView>
    </>
  );
};


export default App;

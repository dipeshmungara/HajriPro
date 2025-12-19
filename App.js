import React, {useCallback} from 'react';
import {StatusBar} from 'expo-status-bar';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {NavigationContainer} from '@react-navigation/native';

SplashScreen.preventAutoHideAsync();

import store from './src/store/store';
import StackNavigator from './src/navigation/StackNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    'SourceSansPro-Regular': require('./src/assets/fonts/SourceSansPro-Regular.ttf'),
    'SourceSansPro-SemiBold': require('./src/assets/fonts/SourceSansPro-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <Provider store={store}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}

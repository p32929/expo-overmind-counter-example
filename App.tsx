import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from "overmind-react";
import { createOvermind } from 'overmind'
import { config } from './src/Others/Overmind/OvermindHelper'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Counter from './src/Components/Counter';
import { View, StatusBar, SafeAreaView, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CounterScreen from './src/Routes/CounterScreen';
import HomeScreen from './src/Routes/HomeScreen';

const overmind = createOvermind(config)

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2196F3',
    accent: '#4CAF50',
  },
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider value={overmind}>
        <PaperProvider theme={theme}>
          <StatusBar />
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
            <Stack.Screen name="Counter" component={CounterScreen} />
          </Stack.Navigator>
        </PaperProvider>
      </Provider>
    </NavigationContainer>
  );
}
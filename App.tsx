import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from "overmind-react";
import { createOvermind } from 'overmind'
import { config } from './src/Others/Overmind/OvermindHelper'
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CounterScreen from './src/Routes/CounterScreen';
import HomeScreen from './src/Routes/HomeScreen';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import MyHeader from './src/Components/MyHeader';

const overmind = createOvermind(config)
const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    accent: 'green',
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Provider value={overmind}>
        <PaperProvider theme={theme}>
          <Stack.Navigator initialRouteName="Home" screenOptions={{
            header: (props) => <MyHeader {...props} />,
          }}>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
            <Stack.Screen name="Counter" component={CounterScreen} />
          </Stack.Navigator>
        </PaperProvider>
      </Provider>
    </NavigationContainer>
  );
}
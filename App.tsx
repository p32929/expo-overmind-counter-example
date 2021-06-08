import React from 'react';
import { Provider } from "overmind-react";
import { createOvermind } from 'overmind'
import { config } from './src/Others/Overmind/OvermindHelper'
import Counter from './src/Components/Counter';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

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

export default function App() {
  return (
    <Provider value={overmind}>
      <PaperProvider theme={theme}>
        <Counter />
      </PaperProvider>
    </Provider>
  );
}
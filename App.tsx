import React from 'react';
import { Provider } from "overmind-react";
import { createOvermind } from 'overmind'
import { config } from './src/Others/Overmind/OvermindHelper'
import Counter from './src/Components/Counter';
const overmind = createOvermind(config)

export default function App() {
  return (
    <Provider value={overmind}>
      <Counter />
    </Provider>
  );
}
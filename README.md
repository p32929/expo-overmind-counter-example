# expo-overmind-counter-example

A small Expo and TypeScript example that shows how to use [Overmind](https://overmindjs.org/) for state in React Native: one counter, two screens and nothing else in the way. The same code runs on Android, iPhone and the web.

## What's in it

```
src/Others/Overmind/OvermindState.ts     the state
src/Others/Overmind/OvermindActions.ts   the actions
src/Others/Overmind/OvermindHelper.ts    createOvermind and a typed context
src/Routes/HomeScreen.tsx                the first screen
src/Routes/CounterScreen.tsx             reads and changes the counter
src/Components/MyHeader.tsx              the shared header
App.tsx                                  the Overmind provider and the navigation stack
```

It also uses React Navigation (stack) and React Native Paper for the screens.

## Run it

```bash
git clone https://github.com/p32929/expo-overmind-counter-example.git
cd expo-overmind-counter-example
npm install
npm start        # then scan the QR code with Expo Go
```

To open it straight on one platform, use `npm run android`, `npm run ios` or `npm run web`.

## Good to know

This example uses Expo SDK 44. The newest Expo Go app may not open such an old SDK. If that happens, run `npm run up` to upgrade Expo, or use it as a reference for how Overmind fits into a React Native app.

## Related examples

1. [react-typescript-overmind-counter-example](https://github.com/p32929/react-typescript-overmind-counter-example): the same idea for React on the web.
2. [react-native-overmind-counter-example](https://github.com/p32929/react-native-overmind-counter-example): the same idea in bare React Native.

## Contributing

Contributions are very welcome, thank you! Before you start on a pull request, please open an issue and tell me what you would like to add or change. That way we can agree on it first, and your time is not spent on something that might not fit.

<p><a href="https://p32929.github.io/share/?repo=expo-overmind-counter-example"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-share-dark.svg"><img src="https://p32929.github.io/readme/footer-share-light.svg" width="50%" align="top" alt="Share this project with your friends in one click"></picture></a><a href="https://p32929.github.io/support/"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-support-dark.svg"><img src="https://p32929.github.io/readme/footer-support-light.svg" width="50%" align="top" alt="If you like my work and want to support me, feel free to support"></picture></a><br><a href="https://openstore.pfay.workers.dev/add"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-join-dark.svg"><img src="https://p32929.github.io/readme/footer-join-light.svg" width="100%" align="top" alt="Put your own apps on OpenStore: free, your listing lives in your own repo"></picture></a></p>

import React from 'react'
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { useActions, useAppState } from '../Others/Overmind/OvermindHelper';

interface Props {
    navigation: any
}

const HomeScreen: React.FC<Props> = (props) => {
    const { } = useActions()
    const { counter } = useAppState()
    const { navigation } = props

    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text>Counter: {counter}</Text>
        <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Counter')}
        />
    </View>

}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

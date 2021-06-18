import React from 'react'
import { Button, Title } from 'react-native-paper';
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
        <Title>Home Screen</Title>
        <Title>Counter: {counter}</Title>

        <Button onPress={() => {
            navigation.navigate('Counter')
        }}>
            Goto Details
        </Button>
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

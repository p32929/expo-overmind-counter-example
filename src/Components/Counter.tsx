import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useActions, useAppState } from '../Others/Overmind/OvermindHelper';

interface Props {

}

const Counter: React.FC<Props> = (props) => {
    const { increase } = useActions()
    const { counter } = useAppState()

    return <View style={styles.container}>
        <Text>HELLO WORLD</Text>
        <Text>{counter}</Text>

        <View style={styles.button}>
            <Button mode="contained" onPress={() => {
                console.log("Pressed+");
                increase(1)
            }} >+</Button>

            <Button mode="contained" onPress={() => {
                console.log("Pressed-");
                increase(-1)
            }} >-</Button>
        </View>

    </View>

}

export default Counter;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 200,
    }
});

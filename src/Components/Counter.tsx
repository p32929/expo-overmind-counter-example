import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
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
            <Button title="+" onPress={() => {
                console.log("Pressed+");
                increase(1)
            }} />

            <Button title="-" onPress={() => {
                console.log("Pressed-");
                increase(-1)
            }} />
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

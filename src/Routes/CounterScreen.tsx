import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Button, Title } from 'react-native-paper';
import { useActions, useAppState } from '../Others/Overmind/OvermindHelper';

interface Props {

}

const CounterScreen: React.FC<Props> = (props) => {
    const { increase } = useActions()
    const { counter } = useAppState()

    return <View style={styles.container}>
        <Title>HELLO WORLD</Title>
        <Title>{counter}</Title>

        <View style={styles.buttonContainer}>
            <Button style={styles.button} mode="contained" onPress={() => {
                console.log("Pressed+");
                increase(1)
            }} >+</Button>

            <Button style={styles.button} mode="contained" onPress={() => {
                console.log("Pressed-");
                increase(-1)
            }} >-</Button>
        </View>

    </View>

}

export default CounterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        width: 200,
    },
    button: {
        marginTop: 16
    }
});

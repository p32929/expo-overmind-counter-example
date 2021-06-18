import { ParamListBase, Route } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Scene, Layout } from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react'
import { Appbar } from 'react-native-paper';
import { EdgeInsets } from 'react-native-safe-area-context';
import { useActions, useAppState } from '../Others/Overmind/OvermindHelper';
import { useRoute } from '@react-navigation/native';

interface Props {
    navigation: StackNavigationProp<ParamListBase>,
    mode: "float" | "screen";
    layout: Layout;
    insets: EdgeInsets;
    scene: Scene<Route<string, object>>;
    previous?: Scene<Route<string, object>>;
}

const MyHeader: React.FC<Props> = (props) => {
    const { } = useActions()
    const { } = useAppState()
    const route = useRoute();
    const { navigation, previous, } = props

    return <Appbar.Header >
        {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
        <Appbar.Content title={route.name} />
    </Appbar.Header>

}

export default MyHeader;

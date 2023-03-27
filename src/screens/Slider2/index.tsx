import React from "react";
import { FlatList, View } from "react-native";
import { IPage } from "../../../App";
import {
    ComponentButtonSlider, ComponentTitleSlider
} from '../../components';
import { styles } from './styles';
export function Slider2({ setPageI }: IPage) {
    const slide2Texts = [
        { id: '1', text: 'Ração Seca Origens Premium Especial Class Carne e Frango para Cães Adultos' },
        { id: '2', text: 'Petisco Special Dog Snacks para Cães Sabor Carne' },
    ]
    return (
        <><View style={styles.panel}>
            <ComponentTitleSlider titleI='Pet MiAu' />
        </View>
        <View style={styles.buttonSlider}>
            <ComponentButtonSlider onPressI={() => setPageI(1)} />
            <ComponentButtonSlider onPressI={() => setPageI(2)} />
            <ComponentButtonSlider onPressI={() => setPageI(3)} />
            <ComponentButtonSlider onPressI={() => setPageI(4)} />
        </View></>
    );
}
import React from "react";
import { FlatList, View } from "react-native";
import { IPage } from '../../../App';
import {
    ComponentButtonSlider, ComponentTitleSlider
} from '../../components';
import { styles } from './styles';
export function Slider1({ setPageI }: IPage) {
    const slide1 = require("../slide1.png")
    const slide1Texts = [
        { id: '1', text: 'Navegue pelas nossas categorias' },
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
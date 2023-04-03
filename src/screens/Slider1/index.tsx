import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { IPage } from "../../../App";
import {
    ComponentButtonSlider, ComponentTitleSlider
} from '../../components';
import { styles } from './styles';
export function Slider1({ setPageI }: IPage) {
    const slide1Texts = [
        { id: '1', text: 'Navegue pelas nossas categorias'},
    ]
    return (
        <View style={styles.container}>
          <View style={styles.panel}>
            <ComponentTitleSlider titleI='PetMiau' />
          </View>
          <View style={styles.buttonSlider}>
            <ComponentButtonSlider onPressI={() => setPageI(1)} />
            <ComponentButtonSlider onPressI={() => setPageI(2)} />
            <ComponentButtonSlider onPressI={() => setPageI(3)} />
            <ComponentButtonSlider onPressI={() => setPageI(4)} />
            <ComponentButtonSlider onPressI={() => setPageI(5)} />
          </View>
        </View>
      )}
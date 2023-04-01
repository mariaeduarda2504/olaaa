import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { IPage } from "../../../App";
import {
    ComponentButtonSlider, ComponentTitleSlider
} from '../../components';
import { styles } from './styles';
export function Slider4({ setPageI }: IPage) {
    const slide4Texts = [
        { id: '4', text: 'Navegue pelas nossas categorias'},
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
          </View>
        </View>
      )}
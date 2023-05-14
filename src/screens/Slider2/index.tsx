import React from "react";
import { FlatList, View, StyleSheet, Image } from "react-native";
import { IPage } from "../../../App";
import {
    ComponentButtonSlider, ComponentListMarker, ComponentTitleSlider,
} from '../../components';
import { styles } from './styles';
export function Slider2({ setPageI }: IPage) {
  const image1 = require("../../assets/image1.png");
  const image2 = require("../../assets/image2.png");
    const slide2Texts = [
        { id: '1', text: 'Ração Seca Origens Premium Especial Class Carne e Frango para Cães Adultos', img: image1},
        { id: "2", text: "Petisco Special Dog Snacks para Cães Sabor Carne",  img: image2 },
    ]
        return (
            <View style={styles.container}>
              <View style={styles.panel}>
                <ComponentTitleSlider titleI='Rações e Petiscos' />
                <FlatList
          data={slide2Texts}
          renderItem={({ item }) => (
            <ComponentListMarker key={item.id} textMarker={item.text} image={item.img} />
            
          )}
        />
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
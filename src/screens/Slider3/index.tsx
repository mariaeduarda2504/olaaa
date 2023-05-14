import React from "react";
import { FlatList, View, StyleSheet, Image } from "react-native";
import { IPage } from "../../../App";
import {
    ComponentButtonSlider, ComponentListMarker, ComponentTitleSlider,
} from '../../components';
import { styles } from './styles';
export function Slider3({ setPageI }: IPage) {
  const image3 = require("../../assets/image3.png");
  const image4 = require("../../assets/image4.png");
    const slide3Texts = [
        { id: '1', text: 'Blusa My Dream Panda Marrom', img: image3},
        { id: "2", text: "Brinquedo Chalesco Pelúcia Macaco",  img: image4 },
    ]
        return (
            <View style={styles.container}>
              <View style={styles.panel}>
                <ComponentTitleSlider titleI='Brinquedos e Acessórios' />
                <FlatList
          data={slide3Texts}
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
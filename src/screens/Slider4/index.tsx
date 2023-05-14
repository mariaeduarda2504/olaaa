import React from "react";
import { FlatList, View, StyleSheet, Image } from "react-native";
import { IPage } from "../../../App";
import {
    ComponentButtonSlider, ComponentListMarker, ComponentTitleSlider,
} from '../../components';
import { styles } from './styles';
export function Slider4({ setPageI }: IPage) {
  const image5 = require("../../assets/image5.png");
  const image6 = require("../../assets/image6.png");
    const slide4Texts = [
        { id: '1', text: 'Gel Dental Ipet Care Menta para Cães e Gatos', img: image5},
        { id: "2", text: "Vermífugo Biovet Vermivet Composto 600 mg para Cães",  img: image6 },
    ]
        return (
            <View style={styles.container}>
              <View style={styles.panel}>
                <ComponentTitleSlider titleI='Farmácia' />
                <FlatList
          data={slide4Texts}
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
import React from "react";
import { FlatList, View, StyleSheet, Image } from "react-native";
import { IPage } from "../../../App";
import {
  ComponentButtonSlider,
  ComponentListMarker,
  ComponentTitleSlider,
} from "../../components";
import { styles } from "./styles";

export function Slider1({ setPageI }: IPage) {
  const image1 = require("../../assets/slider1.png");
  const slide1Texts = [{ id: "1", text: "Navegue pelas nossas categorias:" },
  { id: "2", text: "Rações e Petiscos" },
  { id: "3", text: "Brinquedos e Acessórios" },
  { id: "4", text: "Farmácia" }
  
  

];

  return (
    <View style={styles.container}>
      <View style={styles.panel}>
        <ComponentTitleSlider titleI='PetMiAu' />
        <Image source={image1} style={[styles.image, { alignSelf: 'center' }]} />
        <FlatList
          data={slide1Texts}
          renderItem={({ item }) => (
            <ComponentListMarker key={item.id} textMarker={item.text} image={0} />
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
  );
}

import {View, Text} from "react-native";
import { ComponentButtonInterface } from "../../components";
import { styles } from "./styles";
import { DrawerTypes } from "../../navigations/drawer.navigation";

export function Perfil({ navigation}: DrawerTypes) {
    function handleVoltar (){
        const drawer = navigation.getParent()
        drawer?.goBack()
    }
    return (
        <View style={styles.container}>
            
            <ComponentButtonInterface title="Voltar" type="third" onPressI={handleVoltar}/>
        </View>
    )
}
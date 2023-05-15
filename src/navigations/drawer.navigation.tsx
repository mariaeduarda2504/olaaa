import React from 'react';
import { DrawerNavigationProp, createDrawerNavigator} from '@react-navigation/drawer';
import {ScreenPerfil, ScreenCamera} from "../screens"
import { colors } from '../styles/colors';
import { Ionicons, AntDesign } from '@expo/vector-icons';
type DrawerParamList ={
  Perfil: undefined
  Camera: undefined
}
type DrawerScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Perfil'>
export type DrawerTypes = {
  navigation: DrawerScreenNavigationProp
}
export function DrawerNavigation() {
  const Drawer = createDrawerNavigator<DrawerParamList>();
  return (
    <Drawer.Navigator 
      screenOptions={{
        drawerStyle: {
          backgroundColor: colors.primary
        },
        drawerActiveTintColor: colors.white
      }}
    >
      <Drawer.Screen name="Perfil" component={ScreenPerfil} 
        options={{
          drawerIcon: () => (
            <Ionicons name='person' color={colors.white} size={24} />
          )
        }}
      />
      <Drawer.Screen name="Camera" component={ScreenCamera}
        options={{
          drawerIcon: () => (
            <AntDesign name='camera' color={colors.white} size={24} />
          )
        }}
        />
    </Drawer.Navigator>
  );
}
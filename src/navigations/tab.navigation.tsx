import React from 'react';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {ScreenPerfil, ScreenCamera} from "../screens"
import { colors } from '../styles/colors';
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';
type TabParamList ={
  Perfil: undefined
  Camera: undefined
  Location: undefined
}
type TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Perfil'>
export type TabTypes = {
  navigation: TabScreenNavigationProp
}
export function TabNavigation() {
  const Tab = createBottomTabNavigator<TabParamList>();
  return (
    <Tab.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.third
        },
        headerTintColor: colors.white,
        tabBarInactiveBackgroundColor:colors.secondary,
        tabBarActiveBackgroundColor: colors.third, 
        tabBarActiveTintColor: colors.white
      }}
    >
      <Tab.Screen name="Perfil" component={ScreenPerfil} 
        options={{
          tabBarIcon: () => (
          <Ionicons name='person' color={colors.white} size={24} />
          )
        }}
      />
      <Tab.Screen name="Camera" component={ScreenCamera}
        options={{
          tabBarIcon: () => (
            <AntDesign name='camera' color={colors.white} size={24} />
          )
        }}
      />
    </Tab.Navigator>
  );
}
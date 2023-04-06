import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pokedex from "../screens/Pokedex";
import Pokemon from "../screens/Pokemon";

const Stack = createNativeStackNavigator();

export default function PokedecNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pokedexs" component={Pokedex} options={{headerTitle: "Pokedex", headerTransparent: true}}/>
      <Stack.Screen name="Pokemon" component={Pokemon} options={{headerTitle: "", headerShown: true, headerTransparent: true, headerShadowVisible: false}}/> 
    </Stack.Navigator>
  );
}

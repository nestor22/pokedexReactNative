import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pokedex from "../screens/Pokedex";
import Pokemon from "../screens/Pokemon";

const Stack = createNativeStackNavigator();

export default function PokedecNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pokedex" component={Pokedex} options={{headerTitle: "Pokedex"}}/>
      <Stack.Screen name="Pokemon" component={Pokemon} options={{headerTitle: "pokemon"}}/>
    </Stack.Navigator>
  );
}

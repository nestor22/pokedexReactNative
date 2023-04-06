import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Image } from "react-native";
import FavoritesNavigation from "./FavoritesNavigation";
import AccountNavigation from "./AccountNavigation";
import PokedecNavigation from "./PokedecNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Acount"
        component={AccountNavigation}
        options={{
          tabBarLabel: "Cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedecNavigation}
        options={{
          tabBarLabel: "Pokedeck",
          tabBarIcon: () => renderPokeball(),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Fav"
        component={FavoritesNavigation}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeball(){
    return (
        <Image 
            source={require('../assets/pokeball.png')}
            style = {{ width: 75, height: 75, top: -15}}
        />
    )
}

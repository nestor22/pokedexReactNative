import { StyleSheet, View, Text } from "react-native";
import { map, capitalize } from "lodash";
import React from "react";
import getColorByPokemon from '../../utils/getColorByPokemon'


export default function Type(props) {
  const { types } = props;
  


  return (
    <View style={styles.content}>
      {map(types, (item, index) => (
        <View key={index} style = {{...styles.pill, backgroundColor: getColorByPokemon(item.type.name)}}>
          <Text>{capitalize(item.type.name)}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10
  }
});

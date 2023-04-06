import { FlatList, StyleSheet, ActivityIndicator } from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";
import { Platform } from "react-native";



export default function PokemonList(props) {
  const { pokemons, loadPokemons, isNext } = props;
  const loadMore = ()=> {
    loadPokemons();
  }
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && <ActivityIndicator 
        size = "large"
        style = {styles.spinner}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "adndroid"? 30:0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
    color : "#aeaeae",
    marginBottom: Platform.OS === "adndroid"?90:60,
  }
});

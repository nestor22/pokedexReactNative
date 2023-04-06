import { ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { getPokemonDetailsApi } from "../API/pokemon";
import Header from "../components/pokemon/header";
import Type from "../components/pokemon/Type";

export default function Pokemon(props) {
  const {
    navigation,
    route: { params },
  } = props;
  
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;
  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types = {pokemon.types}/>
    </ScrollView>
  );
}

import { SafeAreaView, Text } from 'react-native'
import React, {useState, useEffect}from 'react'
import { getPokemonsApi, getPokemonDetailsByUrlApi } from '../API/pokemon';

export default function Pokedex() {
  useEffect(()=>{
    (async()=>{
      await loadPokemos();
    })()

  }, []);
  const [pokemos, setPokemos] = useState([])
  const loadPokemos = async() => {
    try {
      const response = await getPokemonsApi();
      const pokemosArray = [];
      for await (let pokemon of response.reault){
        const pokemonDetail = await getPokemonDetailsByUrlApi(pokemon.url);
        pokemosArray.push({
          id: pokemonDetail.id,
          name: pokemonDetail.name,
          type: pokemonDetails.types[0],
          order: pokemonDetail.order,
          imagen: pokemonDetail.sprites.other['official-artwork'].front_default,

        })

      }
      setPokemos(...pokemos, ...pokemosArray)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  )
}
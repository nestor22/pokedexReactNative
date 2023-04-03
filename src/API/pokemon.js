import { API_HOST } from "../utils/constants";

export async function getPokemonsApi() {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;
    const resonse = await fetch(url);
    const result = await resonse.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsByUrlApi(url) {
  try {
    const url = `${url}`;
    const resonse = await fetch(url);
    const result = await resonse.json();
    return result;
  } catch (error) {
    throw error;
  }
}

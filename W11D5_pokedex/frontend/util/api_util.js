export const fetchAllPokemon = () => {
  return $.ajax({
    method: "GET",
    // url: '../../app/views/api/index.json.jbuilder',
    url: '/api/pokemons'
  });
}
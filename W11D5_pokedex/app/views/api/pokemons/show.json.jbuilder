# format for one model
json.pokemon do
  json.extract! @pokemon, :name, :attack, :defense, :poke_type, :image_url
end
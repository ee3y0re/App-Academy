@guests.each do |guest|
    json.set! guest.id do 
        json.extract! guest,  :age, :name, :favorite_color
        json.age guest.age
        json.name guest.name 
        json.favorite_color guest.favorite_color
    end
end
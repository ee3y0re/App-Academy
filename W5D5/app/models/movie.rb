class Movie < ApplicationRecord
  belongs_to :director,
    class_name: :Actor,
    foreign_key: :director_id,
    primary_key: :id

  has_many :castings,
    class_name: :Casting,
    foreign_key: :movie_id,
    primary_key: :id

  has_many :actors,
    through: :castings,
    source: :actor
end


#   t.string "title", null: false
#   t.integer "yr", null: false
#   t.float "score", null: false
#   t.integer "votes", null: false
#   t.integer "director_id", null: false


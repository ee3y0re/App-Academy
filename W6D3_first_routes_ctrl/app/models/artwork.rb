class Artwork < ApplicationRecord
    validates :title, uniqueness: { scope: :artist_id } #because artist_id is foreign key
    validates :artist_id, :title, :image_url, presence: true
end
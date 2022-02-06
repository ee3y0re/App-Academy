require "action_view"
class Cat < ApplicationRecord
include ActionView::Helpers::DateHelper
    validates :color, inclusion: { in: %w(Orange Grey Black),
        message: "%{color} is not a valid color" }
    validates :sex, inclusion: { in: %w(M F),
        message: "%{sex} is not a valid sex" }
    validates :birth_date, :color, :name, :sex, :description, presence: true

    def age
        time_ago_in_words(birth_date)
        #created_at.year - birth_date.year
    end
    
end

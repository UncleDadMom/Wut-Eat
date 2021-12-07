class Vote < ApplicationRecord
    belongs_to :user_group
    belongs_to :nearby_restaurant
end

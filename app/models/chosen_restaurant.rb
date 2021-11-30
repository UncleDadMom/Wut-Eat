class ChosenRestaurant < ApplicationRecord
  belongs_to :group, optional: true
end

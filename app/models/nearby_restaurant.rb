class NearbyRestaurant < ApplicationRecord
  belongs_to :group, optional: true
  has_many :votes
  has_many :user_groups, through: :votes
end

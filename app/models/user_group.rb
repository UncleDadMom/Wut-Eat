class UserGroup < ApplicationRecord
    belongs_to :user
    belongs_to :group
    has_many :votes
    has_many :nearby_restaurants, through: :votes
end

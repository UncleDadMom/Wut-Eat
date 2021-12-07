class User < ApplicationRecord
    has_many :friendships
    has_many :friends, through: :friendships
    has_many :user_groups
    has_many :groups, through: :user_groups
    has_many :votes, through: :user_groups
    has_many :nearby_restaurants, through: :groups
    has_secure_password
    validates :username, presence: true, uniqueness: { case_sensitive: false }
end

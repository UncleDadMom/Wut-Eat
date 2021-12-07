class NearbyRestaurantSerializer < ActiveModel::Serializer
  attributes :id, :yelp_id, :name, :categories, :image
  has_many :votes
end

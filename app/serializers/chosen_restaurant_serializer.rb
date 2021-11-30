class ChosenRestaurantSerializer < ActiveModel::Serializer
  attributes :id
  has_one :group
end

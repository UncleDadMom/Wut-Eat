class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  puts "User Serializer hit"
end

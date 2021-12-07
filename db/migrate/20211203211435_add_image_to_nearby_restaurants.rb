class AddImageToNearbyRestaurants < ActiveRecord::Migration[6.1]
  def change
    add_column :nearby_restaurants, :image, :string
  end
end

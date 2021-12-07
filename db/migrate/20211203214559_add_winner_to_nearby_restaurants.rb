class AddWinnerToNearbyRestaurants < ActiveRecord::Migration[6.1]
  def change
    add_column :nearby_restaurants, :winner, :boolean, default: false
  end
end

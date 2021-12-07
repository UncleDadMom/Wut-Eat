class CreateNearbyRestaurants < ActiveRecord::Migration[6.1]
  def change
    create_table :nearby_restaurants do |t|
      t.integer :group_id
      t.string :yelp_id
      t.string :name
      t.jsonb :categories
    end
  end
end

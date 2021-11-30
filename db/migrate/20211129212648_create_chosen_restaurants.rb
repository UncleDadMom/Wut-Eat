class CreateChosenRestaurants < ActiveRecord::Migration[6.1]
  def change
    create_table :chosen_restaurants do |t|
      t.references :group, null: false, foreign_key: true
      t.integer :api_id
    end
  end
end

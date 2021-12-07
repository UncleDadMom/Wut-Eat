class CreateVotes < ActiveRecord::Migration[6.1]
  def change
    create_table :votes do |t|
      t.integer :nearby_restaurant_id
      t.boolean :accept
      t.integer :user_group_id
    end
  end
end

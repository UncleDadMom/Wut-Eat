class CreateGroups < ActiveRecord::Migration[6.1]
  def change
    create_table :groups do |t|
      t.string :location
      t.string :cuisine
      
    end
  end
end

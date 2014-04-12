class CreateStats < ActiveRecord::Migration
  def change
    create_table :stats do |t|
      t.integer :weight
      t.integer :age
      t.string :location
    end
  end
end

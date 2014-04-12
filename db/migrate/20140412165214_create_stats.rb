class CreateStats < ActiveRecord::Migration
  def change
    create_table :stats do |t|
      t.integer :height
      t.integer :weight
      t.integer :age
      t.string :location
      t.binary :gender
    end
  end
end

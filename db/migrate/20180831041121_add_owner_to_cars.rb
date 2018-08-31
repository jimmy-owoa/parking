class AddOwnerToCars < ActiveRecord::Migration[5.2]
  def change
    add_reference :cars, :owner, foreign_key: true
  end
end

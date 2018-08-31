class AddAnnexedToOwners < ActiveRecord::Migration[5.2]
  def change
    add_reference :owners, :annexed, foreign_key: true
  end
end

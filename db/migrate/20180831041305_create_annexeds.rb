class CreateAnnexeds < ActiveRecord::Migration[5.2]
  def change
    create_table :annexeds do |t|
      t.string :name
      t.string :address
      t.string :leader

      t.timestamps
    end
  end
end

class Car < ApplicationRecord
  belongs_to :owner
  belongs_to :brand

  validates_presence_of :plate, :model

  def api_json
    {
      plate: plate,
      color: color,
      model: model,
      owner_id: owner_id,
      brand_id: brand_id
    }
  end

  def self.api_json
    self.all.map {|car| car.api_json }
  end

end

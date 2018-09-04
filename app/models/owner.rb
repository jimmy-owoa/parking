class Owner < ApplicationRecord
  has_many :cars
  belongs_to :annexed

  def full_name
    "#{name} #{lastname}"
  end

  
end

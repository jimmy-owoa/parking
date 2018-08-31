class Owner < ApplicationRecord
  has_many :cars
  belongs_to :annexed

end

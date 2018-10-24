class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # , :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :rememberable, :validatable

  enum user_type: [:normal, :admin, :boss]

  def is_admin?
    self.admin?
  end

  def is_boss?
    self.boss?
  end
end

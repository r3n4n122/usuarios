class User < ActiveRecord::Base
  has_many :addresses, dependent: :delete_all

  validates :email, :cpf, presence: true

  accepts_nested_attributes_for :addresses

end
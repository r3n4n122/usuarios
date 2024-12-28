class User < ActiveRecord::Base
  has_many :addresses, dependent: :delete_all

  validates :email, :cpf, presence: true
  validate :addresses_empty?

  accepts_nested_attributes_for :addresses

  private

  def addresses_empty?
    if addresses.empty?
      errors.add(:addresses, :blank, message: "endereço não pode ficar em branco")
    end
  end
end
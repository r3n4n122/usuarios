class UserSerializer
  include JSONAPI::Serializer

  attributes :name, :cpf, :email, :date_of_birthday

  attribute :addresses do |user|
    user.addresses.map do |ad|
      ad.slice(:state_id, :city_id, :street, :zip_code, :number)
    end
  end
end
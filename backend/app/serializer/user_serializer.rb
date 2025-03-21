class UserSerializer
  include JSONAPI::Serializer

  attributes :name, :cpf, :email, :date_of_birthday

  attribute :addresses do |user|
    user.addresses.map do |ad|
      {street: ad.street, zip_code: ad.zip_code, number: ad.number, city: ad.city.name, state: ad.state.name}
    end
  end
end
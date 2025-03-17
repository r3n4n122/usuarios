class UserSerializer
  include JSONAPI::Serializer

  attributes :name, :cpf, :email, :date_of_birthday, :addresses
end
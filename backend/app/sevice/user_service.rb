class UserService

  def initialize(params_user, params_address)
    @params_user = params_user
    @params_address = params_address
  end

  def call
    create_user
  end
  
  private

  def create_user
    user = User.new(@params_user)
    user.date_of_birth =  @params_user[:date_of_birth].to_date unless  @params_user[:date_of_birth].nil?
    user.save
    build_address(user)
  end


  def build_address(user)
    unless  @params_address.empty?
      @params_address.each do |address|
        address_new = user.addresses.build
        address_new.state_id = address[:state_id]
        address_new.city_id = address[:city_id]
        address_new.street = address[:street]
        address_new.zip_code = address[:zip_code]
        address_new.number = address[:number]
        address_new.save
      end
    end
  end
end
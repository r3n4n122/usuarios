class UserService

  def initialize(params_user)
    @params_user = params_user
  end

  def create_user
    user = User.new(@params_user)
    user.date_of_birth =  @params_user[:date_of_birth].to_date unless  @params_user[:date_of_birth].nil?
    user.save
  end
  
end
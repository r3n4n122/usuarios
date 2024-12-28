module Api
  class V1::UsersController < ApplicationController
    def index 
      render json: {collection: User.last(2)}
    end

    private 

  end
end
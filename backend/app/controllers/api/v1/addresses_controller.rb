module Api
  class V1::AddressesController < ApplicationController
    def states
      render json: {collection: State.all }
    end

    def cities
      render json: {collection: City.all}
    end
  end
end
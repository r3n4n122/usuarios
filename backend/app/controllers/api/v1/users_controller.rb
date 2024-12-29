module Api
  class V1::UsersController < ApplicationController
    skip_before_action :verify_authenticity_token, only: [:destroy]

    def index 
      render json: {collection: User.all}
    end

    def destroy
      Rails.logger.info "Params recebidos: #{params.inspect}"

      user = User.find_by(id: params[:id])
      if user.destroy
        render json: { message: "Usuário excluído com sucesso" }, status: :ok
      else 
        render json: { error: "Usuário não encontrado" }, status: :not_found
      end
    end
  end
end
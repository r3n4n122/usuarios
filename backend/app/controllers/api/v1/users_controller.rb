module Api
  class V1::UsersController < ApplicationController
    skip_before_action :verify_authenticity_token, only: [:destroy, :create, :update]

    def index 
      render json: {collection: User.all}
    end

    def create
      user = User.new(user_params)
      user.date_of_birthday = params[:user][:date_of_birthday].to_date if params[:user][:date_of_birthday].present?
      create_addresses(user)
      if user.save
        render json: { message: "Usuário criado com sucesso" }, status: :ok
      else
        render json: { message: "Usúario não cadastrado"}, status: :not_found
      end
    end

    def update
      user = User.find(params[:id])
      if user.update!(user_params)
        render json: { message: "Usuário atualizado com sucesso" }, status: :ok
      else
        render json: { message: "Não foi possivel atualizar" }, status: :not_found
      end
    end

    def destroy
      user = User.find_by(id: params[:id])
      if user.destroy
        render json: { message: "Usuário excluído com sucesso" }, status: :ok
      else 
        render json: { error: "Não foi possivel excluir" }, status: :not_found
      end
    end

    private 

    def create_addresses(user)
      addresses = params[:addresses]
      addresses.each do |a|
        address = Address.build
        address.state_id = a["state"].to_i
        address.city_id = a["city"].to_i
        address.user_id = user.id
        address.street = a["street"]
        address.zip_code = a["zip_code"]
        address.number = a["number"]
        address.save
      end
    end

    def user_params
      params.require(:user).permit(:name, :cpf, :email, :date_of_birthday)
    end
  end
end
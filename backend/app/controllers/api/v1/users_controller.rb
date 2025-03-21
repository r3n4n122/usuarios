module Api
  class V1::UsersController < ApplicationController
    skip_before_action :verify_authenticity_token, only: [:destroy, :create, :update]

    def index 
      render json: {collection: User.all}
    end

    def create
      user = UserService.new(user_params).create_user

      if user
        render json: { message: "Usuário criado com sucesso" }, status: 200
      else
        render json: { message: "Usúario não foi cadastrado"}, status: 400
      end
    end

    def update
      user = User.find(params[:id])
      if user.update!(user_params)
        render json: { message: "Usuário atualizado com sucesso" }, status: 200
      else
        render json: { message: "Não foi possivel atualizar" }, status: 400
      end
    end

    def destroy
      user = User.find_by(id: params[:id])
      if user.destroy
        render json: { message: "Usuário excluído com sucesso" }, status: 200
      else 
        render json: { error: "Não foi possivel excluir" }, status: 400
      end
    end

    def edit
      user = User.find(params[:id])
      
      render json: UserSerializer.new(user).serializable_hash
    end

    private 

    def user_hash(user)
      {
        id: user.id,
        name: user.name,
        cpf: user.cpf,
        email: user.email,
        date_of_birthday: user.date_of_birthday.strftime("%d/%m/%Y"),
      }
    end

    def user_params
      params.require(:user).permit(:name, :cpf, :email, :date_of_birthday, addresses_attributes: [:id, :state_id, :city_id, :street, :zip_code, :number])
    end
  end
end
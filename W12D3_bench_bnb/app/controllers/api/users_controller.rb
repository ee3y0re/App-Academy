class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      render json: :show #i'm expecting show.json.jbuilder
    else
      #need to render the login page again with sign up
      #temp place holder
      render json: ['This user was already created or input info is invalid'] #@user.errors.full_messages, status: 422
    end
  end
  
  private

  def user_params
      params.require(:user).permit(:username, :password)
  end
end

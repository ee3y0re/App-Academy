class UsersController < ApplicationController

  def new
    @user = User.new
    render :new
  end

  def create 
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      redirect_to user_url(@user)
    else
      render json: @users.errors.full_messages, status: 422
    end
  end

  private

  #doesn't take in password_digest or sessions_token as parameters.
  #session_tokens is created in the User model
  #password digest is also created in User model, using :password param as an argument
  def user_params
    params.require(:user).permit(:username, :password)
  end
end

class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      flash.now[:errors] = ['Invalid username or password.']
      render :new
    else
      login!(@user)
      redirect_to user_url(@user)
    end

  end

  def destroy
    if logout!
      render {}
    else
      render json: user.errors.full_messages, status: 404
  end
end

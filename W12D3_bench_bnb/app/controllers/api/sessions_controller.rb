class Api::SessionsController < ApplicationController
  def create
    # debugger
    @user = User.find_by_credentials(
      params[:user][:username], 
      params[:user][:password]
    )
    if @user.nil?
      render json: ['Invalid username or password.'], status: 401
    else
      login!(@user)
      # debugger
      render 'api/users/show'
    end

  end

  def destroy
    # debugger
    logout!
    render json: '{}'
  end
end

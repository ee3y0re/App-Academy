class SessionsController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user #checks truthyness value of @user; saves result of find_by_credentials in @user 
      login!(@user)
      redirect_to cats_url
    else
      render json: ["invalid credentials"], status: 401 #unauthorized
    end
  end

  def destroy
    logout!
    redirect_to new_session_url
  end
end

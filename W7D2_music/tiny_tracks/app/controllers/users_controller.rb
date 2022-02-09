class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    render :show #depends on existence of show.html.erb
  end

  def create
    @user = User.new(new_user_params)
    if @user.save
      login!(@user)
      redirect_to user_url(@user.id) #redirects to user show page and not index
    else
      #old
      # render json: @user.errors.full_messages, status: 422
      #new
      flash.now[:errors] = @user.errors.full_messages #this still needs to render; probably will use an errors partial
      render :new #to try creating a new user again
    end

  end

  def new
    @user = User.new
    render :new
  end



  private

  def new_user_params
    params.require(:user).permit(:email, :password)
  end
end

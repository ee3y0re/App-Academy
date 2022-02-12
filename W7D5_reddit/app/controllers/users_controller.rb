class UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            redirect_to subs_url #Supposed to show us all subreddits
        else
            flash[:errors] = @user.errors.full_messages
            render :new
        end
    end

    def new
        @user = User.new()
        render :new
    end

    def update
        @user = User.find(params[:id])
        if @user.update
            render :show
        else
            flash[:errors] = @user.errors.full_messages
            render :edit 
        end
    end

    def destroy
        @user = User.find(params[:id])
        if @user.id == current_user.id
            @user.destroy
        else
            flash[:errors] = ['You may only delete your own account!']
            current_user.logout!
            redirect_to new_session_url
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password)
    end
end

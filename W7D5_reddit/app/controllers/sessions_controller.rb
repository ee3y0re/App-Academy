class SessionsController < ApplicationController
    def new
        render :new
    end

    def create #logging in user
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            login!(@user)
            redirect_to subs_url
        else
            flash[:errors] = ["Invalid username or password "]
            render :new
        end
    end

    def destroy
        if logged_in?
            logout!
        else
            redirect_to new_session_url
        end
    end
end

class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?

    #crrlll
    def current_user
        #||= prevents from having to query again
        @current_user ||= User.find_by(session_token: session[:session_token]) #checking truthy value of current user or set it to find someone
        #when logging out, need to set @current_user and session[:session_token] to nil
    end

    #requiring login redirects to sign in page unless already current user aka logged in
    def require_logged_in
        redirect_to new_session_url unless current_user
    end

    def require_logged_out
        redirect to users_url if logged_in?
    end

    def login!(user) #for security purposes because we can't save user info in db
        #constantly updating session token
        session[:session_token] = user.reset_session_token!
    end

    def logged_in?
        !!current_user #double not
        #relying on ruby's truthy/values
        #opposite of false
    end


    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end
end

#adding columns can conflict with what seed data contains esp if those columns are null
#so need to drop database, then migrate, change seed, then setup

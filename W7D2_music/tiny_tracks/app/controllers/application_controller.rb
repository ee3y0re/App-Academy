class ApplicationController < ActionController::Base
    #current user
    #log in user
    #crlll -boilerplate

    ##general note for tests via Chris
    #migrations
    #models
    ##spire esp for user
    #controllers - 
    ##crrlll
    #views

    #today models/migrations 3-4 times
    #next controllers
    #next day views
    #friday basically done whole thing and focus on weakpoints

    #helper methods helps see methods in views
    helper_method :current_user, :logged_in?

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_logged_in
        redirect_to new_session_url unless current_user
    end

    def require_logged_out
        redirect_to users_url if logged_in? #rn users_url is create instead of index
    end

    def login!(user)
        session[:session_token] = user.reset_session_token!
    end
    
    def logged_in?
        !!current_user
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

end

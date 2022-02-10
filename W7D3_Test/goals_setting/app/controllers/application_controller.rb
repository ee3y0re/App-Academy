class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?

    #crrlll
    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    #requiring login redirects to sign in page unless already current user aka logged in
    def require_logged_in
        redirect_to new_session_url unless current_user
    end

    def require_logged_out
        redirect to users_url if logged_in?
    end

    def login!(user)
        session[:session_token] = user.reset_session_token!
    end

    def logged_in?
        !!current_user #double not
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end
end

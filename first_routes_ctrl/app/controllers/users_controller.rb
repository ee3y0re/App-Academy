class UsersController < ApplicationController
    def index
        # render plain: "Whatever we want in index"
        sleepy_1 = User.all
        render json: sleepy_1
    end
    
    def create
        user = User.new(user_params)
        # replace the `user_attributes_here` with the actual attribute keys
        if user.save!
			render json: user
		else
			render json: user.error.full_messages, status:422
		end
    end

    def show
        render json: params
    end

    private

    def user_params
        params.require(:user).permit(:name, :email)
    end
end
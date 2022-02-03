class UsersController < ApplicationController
    def index
        # render plain: "Whatever we want in index"
        sleepy_1 = User.all
        render json: sleepy_1
    end
    
    def create
        render json: params
    end

    def show
        render json: params
    end
end
class UsersController < ApplicationController
    def index
        render plain: "Whatever we want in index"
    end
    
    def create
        render json: params
    end

    def show
        render json: params
    end
end
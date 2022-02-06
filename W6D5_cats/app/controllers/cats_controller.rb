class CatsController < ApplicationController
    
    def index
        @cats = Cat.all #adding @ makes it accessible thoughout the project
        render :index
    end

    def show
        @cat = Cat.find(params[:id])
        render :show
    end


end


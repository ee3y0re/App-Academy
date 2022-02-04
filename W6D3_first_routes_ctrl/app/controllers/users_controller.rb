class UsersController < ApplicationController
    def index
        # render plain: "Whatever we want in index"
        sleepy_1 = User.all
        render json: sleepy_1
    end
    
    def create
        user = User.new(user_params) #params.require(:users).permit(:username, :email)
        #params is a nested hash require looks for the designated key and permit looks for keys within that key
        # replace the `user_attributes_here` with the actual attribute keys
        if user.save
			render json: user
        # same 422 error even without else statement as long as it's save! and not save
        #keep else if save is without ! so that specific error message passes through
		else
			render json: user.error.full_messages, status:422
		end
    end

    def update
        user = User.find(params[:id])
        if user.update(user_params)
            redirect_to "/users/#{user.id}"
        else
            render json: user.errors.full_messages, status: 422
        end
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def destroy
        user = User.find(params[:id])
        
        if user.destroy
            render json: "Bye Bye #{user.username}"
        else
            render json: user.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        # params.require(:user).permit(:name, :email)
        params.require(:user).permit(:username)
    end
end
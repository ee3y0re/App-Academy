#  artworks GET    /artworks(.:format)                                                                      artworks#index
#           POST   /artworks(.:format)                                                                      artworks#create
#   artwork GET    /artworks/:id(.:format)                                                                  artworks#show
#           PATCH  /artworks/:id(.:format)                                                                  artworks#update
#           PUT    /artworks/:id(.:format)                                                                  artworks#update
#           DELETE /artworks/:id(.:format)  
##
# rails g controller ControllerName index show update delete create

#access by other users means turn off the server before resetting db
class ArtworksController < ApplicationController
    def index
        potato = Artwork.all
        render json: potato
    end

    def show
        mayo = Artwork.find(params[:id])
        render json: mayo
    end

    def update
        egg = Artwork.find(params[:id])
        if egg.update(user_params)
            redirect_to "/artworks/#{egg.id}"
        else
            render json: egg.errors.full_messages, status: 422
        end
    end

    def destroy
        onion = Artwork.find(params[:id])
        if onion.destroy
            render json: "Bye bye, #{onion.title}."
        else
            render json: onion.errors.full_messages, status: 422
        end
    end

    def create
        mustard = Artwork.new(user_params)
        if mustard.save
            render json: mustard
        else
            render json: mustard.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        params.require(:artwork).permit(:title, :image_url, :artist_id)
    end
end

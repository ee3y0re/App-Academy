require 'rails_helper'

RSpec.describe UsersController, type: :controller do

    describe "GET #index" do
        it 'renders the users index' do
          get :index
          expect(response).to render_template(:index)
        end      
    end

    describe "GET #show" do
        before(:each) do
            create(:user) 
        end
        it 'renders the show template' do
            get :show, params: {id: user.id}
            expect(response).to render_template(:show)
        end
    end

    describe "POST #create" do
        let(:valid_params){{users: {username: "Pikachu", password: "abcdefg"}}}
        let(:invalid_params){{users: {nada: ""}}}

        context "with valid params" do
            it "redirects to user show page" do
                post :create, params: valid_params
                expect(response).to redirect_to(user_url(User.last.id))
            end
            it "creates the user" do
                post :create, params: valid_params
                expect(User.last.username).to eq("Pikachu")
            end
        end

        context "with invalid params" do
            it "renders to new page" do
                post :create, params: invalid_params
                expect(response).to render_template(:new)
            end
            it "flashes an error" do
                post :create, params: invalid_params
                expect(flash[:errors]).to be_present
            end
        end
    end
end
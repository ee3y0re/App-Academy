Rails.application.routes.draw do
  # get 'dummy/show'
  resources :users, only: [:new, :show, :create]
  resource :session, only: [:new, :create, :destroy] 
end

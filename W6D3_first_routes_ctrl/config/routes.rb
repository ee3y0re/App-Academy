Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :users

  ##This for Users
  get  'users', to: 'users#index', as: 'users'
  get 'users/:id', to: 'users#show', as: 'user'
  post  'users', to: 'users#create'
  # get 'users/new', to: 'users#new', as: 'new_user'
  # get 'users/:id/edit', to: 'users#edit', as: 'edit_user'
  patch  'users/:id', to: 'users#update' #update specific user
  # put 'users/', to: 'users#update'
  delete 'users/:id', to: 'users#destroy'
  # resources :users, except: [:new, :edit]

  ##This is for Artworks
  resources :artworks, except: [:new,  :edit]

end

Rails.application.routes.draw do
  resources :cats, except: :destroy

  # root to: redirect('/cats')
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

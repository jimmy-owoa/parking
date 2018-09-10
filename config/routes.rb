Rails.application.routes.draw do

  devise_for :users, path: '', path_names: {
             sign_in: 'login'}, controllers: {
             sessions: 'users/sessions'
            }
  resources :brands
  resources :annexeds
  resources :owners
  resources :cars
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'cars#index'

end

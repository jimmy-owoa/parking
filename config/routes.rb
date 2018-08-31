Rails.application.routes.draw do
  devise_for :users
  resources :brands
  resources :annexeds
  resources :owners
  resources :cars
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#index'
end

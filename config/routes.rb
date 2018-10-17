Rails.application.routes.draw do

  devise_for :users, path: '', path_names: {
    sign_in: 'login'}, controllers: {
      sessions: 'users/sessions'
  }
  scope '(:locale)', locale: /#{I18n.available_locales.join('|')}/, defaults: {locale: "es"} do
    resources :brands
    resources :annexeds
    resources :owners do
      resources :cars
    end
    resources :cars do
      resources :brands, only: [:create, :new]
    end
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root to: 'cars#index'
  end
end

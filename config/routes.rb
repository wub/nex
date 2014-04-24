Rails.application.routes.draw do
  devise_for :users

  as :user do
    get '/login' => 'devise/sessions#new'
    get '/logout' => 'devise/sessions#destroy'
    get '/register' => 'devise/registrations#new'
    get '/profile/edit' => 'devise/registrations#edit'
  end

  get 'profile', to: 'users#index'
  get '/profile/:id', to: 'users#show'

  root to: 'home#index'
end

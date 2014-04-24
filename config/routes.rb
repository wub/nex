Rails.application.routes.draw do
  devise_for :users

  as :user do
    get '/login' => 'devise/sessions#new'
    get '/logout' => 'devise/sessions#destroy'
    get '/register' => 'devise/registrations#new'
  end

  root to: 'home#index'
end

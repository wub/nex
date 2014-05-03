Rails.application.routes.draw do
  require 'sidekiq/web'
  mount Sidekiq::Web => '/sidekiq'

  devise_for :users
  as :user do
    delete '/logout' => 'devise/sessions#destroy'
  	get '/logout' => 'devise/sessions#destroy'

    post '/login' => 'devise/sessions#new'
    get '/login' => 'devise/sessions#new'

    get '/register' => 'devise/registrations#new'
    get '/profile/edit' => 'devise/registrations#edit'
  end

  get 'profile', to: 'users#index'
  get '/profile/:id', to: 'users#show'

  # File uploads
  resource :chunk, only: [:create, :show]

  root to: 'home#index'
end

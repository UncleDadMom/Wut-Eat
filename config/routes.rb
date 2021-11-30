Rails.application.routes.draw do
  get '/restaurants', to: 'yelp#search'
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "logout", to: "sessions#destroy"
  get "/me", to: "users#me"
  get "/friends", to: "users#friends"
  post "/invite", to: "groups#create"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

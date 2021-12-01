Rails.application.routes.draw do
  post "/signup", to: "users#create"
  get "/search/:q", to: "users#addFriend"
  post "/login", to: "sessions#create"
  delete "logout", to: "sessions#destroy"
  get "/me", to: "users#me"
  get "/friends", to: "users#friends"
  post "/groupandvote", to: "groups#getNearbyRestaurants"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

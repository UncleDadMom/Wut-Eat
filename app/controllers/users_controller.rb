class UsersController < ApplicationController
  before_action :current_user, except: [:create]

    def create #/signup
      puts "Attemping to create user"
      user = User.create(user_params)
        if user.valid?
          render json: user, status: :created
          session[:user_id] = user.id
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
          puts "Failed to create user"
        end
      end

    def me
        if @current_user
            render json: @current_user
            puts "#{@current_user} auto-logged in!"
        else
            render json: { error: "No user currently logged in."}, status: :unauthorized
        end
    end

    def friends
      # @current_user = User.find_by(id: session[:user_id])
      friends = @current_user.friends
      render json: friends
    end
    
    def addFriend
      user = User.where('lower(username) = ?', params[:q].downcase).first
      if @current_user === user
        return render json: { error: "You can't friend yourself!"}, status: :unprocessable_entity
      end
      if @current_user.friends.include?(user)
        return render json: { error: "You have already friended #{user.username}."}, status: :unprocessable_entity
      end
      if user
        @current_user.friends << user
        puts "added #{user.username} as #{@current_user.username}'s friend"
        render json: user
      else 
        render json: { error: "No user found."}, status: 404
      end
    end


    def vote
      puts "Vote received"
      @ug ||= UserGroup.find_by(user_id: @current_user.id, group_id: session[:group_id])
      restaurant = NearbyRestaurant.find(params[:rest_id])
      if params[:votes_left]
        Vote.create!(accept: params[:accept], user_group_id: @ug.id, nearby_restaurant_id: restaurant.id)
        puts "Vote created"
      end
      if restaurant.votes.length == session[:groupsize] && restaurant.votes.filter{|vote| !vote[:accept]}.empty? #winning condition
        restaurant.update(winner: true)
        session.delete :groupsize
        session.delete :group_id
        return render json: restaurant, status: :accepted
      end
      render json: restaurant.votes
    end

    def history
      winners = @current_user.nearby_restaurants.where winner: true
      render json: winners
    end

    private

    def user_params
      params.permit(:username, :password, :password_confirmation)
    end

    def current_user
      @current_user ||= User.find_by(id: session[:user_id])
      puts "current_user method hit"
    end

end

class UsersController < ApplicationController
    def create #/signup
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
      puts "Received get request at /me, App.js must've rendered!"
        current_user = User.find_by(id: session[:user_id])
        if current_user
            render json: current_user
        else
            render json: { error: "No user currently logged in."}, status: :unauthorized
        end
    end

    def friends
      puts "Received get request at /friends, Group.js must've rendered!"
      current_user = User.find_by(id: session[:user_id])
      friends = current_user.friends
      render json: friends
    end
    
    private

    def user_params
      params.permit(:username, :password, :password_confirmation)
    end

end

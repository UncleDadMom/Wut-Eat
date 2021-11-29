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
        current_user = User.find_by(id: session[:user_id])
        if current_user
            render json: current_user
            puts "Logged in"
        else
            render json: { error: "No user currently logged in."}, status: :unauthorized
        end
    end

    def friends
      current_user = User.find_by(id: session[:user_id])
      friends = current_user.friends
      render json: friends
    end
    
    private

    def user_params
      params.permit(:username, :password, :password_confirmation)
    end

end

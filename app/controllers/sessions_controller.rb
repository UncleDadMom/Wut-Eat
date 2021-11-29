class SessionsController < ApplicationController

    def create  
        user = User.where('lower(username) = ?', params[:username].downcase).first
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: 200
            puts "#{user.username} logged in"
        else
            render json: { error: "Invalid username or password"}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end
end

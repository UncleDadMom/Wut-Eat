class GroupsController < ApplicationController
    def create
        g = Group.create(location: params[:location], cuisine: params[:cuisine])
        puts "group created"
        friendIDs = params[:groupMembers].map{|m| m[:id]}
        puts "ID array mapped"
        friendIDs.each {|id| UserGroup.create!(user_id: id, group_id: g.id)}
        render json: g, status: :created
    end
end

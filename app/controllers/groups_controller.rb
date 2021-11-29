class GroupsController < ApplicationController
    def create
        g = Group.create(location: params[:location], cuisine: params[:cuisine])
        puts "Group created"
        params[:groupMembers].each{|m| UserGroup.create!(user_id: m[:id], group_id: g.id)}
        puts "UserGroups created"
        render json: g, status: :created
    end
end

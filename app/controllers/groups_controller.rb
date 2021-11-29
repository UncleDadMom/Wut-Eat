class GroupsController < ApplicationController
    def create
        g = Group.create(location: params[:location], cuisine: params[:cuisine])
        params[:groupMembers].each {|member| UserGroup.create!(user_id: member.id, group_id: g.id)}
        render :json g
    end
end

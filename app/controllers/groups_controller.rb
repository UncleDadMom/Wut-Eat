class GroupsController < ApplicationController
    require "json"
    require "optparse"
    require 'rest-client'
    
    def getNearbyRestaurants
        g = Group.create(location: params[:location], cuisine: params[:cuisine])
        puts "Group created"
        params[:groupMembers].each{|m| UserGroup.create!(user_id: m[:id], group_id: g.id)}
        puts "UserGroups created"
        response = RestClient.get("https://api.yelp.com/v3/businesses/search?term=#{g.cuisine}&location=#{g.location}", { Authorization: "Bearer 0ipEJCJtIN4ub_aAffBmf-4D9-FvEeVwRg6N9mdhR2Jpb2tLsO-wQLSFbHEckpQxyraH0TS4GAlIHNmNxWZaXFI3aypiCrv4A6dqLJSNY1IzPl9dTCWKDY1VZFKeYXYx" })
        results = JSON.parse(response)    
        render :json => results["businesses"]
    end
end

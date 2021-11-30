class YelpController < ApplicationController
    require "json"
    require "optparse"
    require 'rest-client'
    
    def search  
        rest_cuisine = params[:cuisine]  
        rest_location = params[:location]  
        response = RestClient::Request.execute(
          method: "GET",
          url: "https://api.yelp.com/v3/businesses/search?term=#{rest_cuisine}&location=#{rest_location}",  
          headers: { Authorization: "Bearer 0ipEJCJtIN4ub_aAffBmf-4D9-FvEeVwRg6N9mdhR2Jpb2tLsO-wQLSFbHEckpQxyraH0TS4GAlIHNmNxWZaXFI3aypiCrv4A6dqLJSNY1IzPl9dTCWKDY1VZFKeYXYx" }  
          )    
       results = JSON.parse(response)    
       render json: results  
      end
end

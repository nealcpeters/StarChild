include Geokit::Geocoders

class StatsController < ApplicationController
  def create
    res = MultiGeocoder.geocode(params[:location])
    @stats = Stats.create(weight: params[:weight], location: res.ll.to_s, age: params[:age])
    render :partial => 'all_stats'
  end

  def show
    @stats = Stats.find(params[:id])   
  end
end
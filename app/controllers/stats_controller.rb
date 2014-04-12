class StatsController < ApplicationController
  def create
    gender = "1" if params[:gender] == "Female"
    gender = "0" if params[:gender] == "Male"
    @stats = Stats.new(height: params[:height], weight: params[:weight], location: params[:location], gender: gender, age: params[:age])
    render :partial => 'all_stats'
  end

  def show
    @stats = Stats.find(params[:id])   
  end


end
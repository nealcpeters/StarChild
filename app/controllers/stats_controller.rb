class StatsController < ApplicationController
  def create
    gender = "1" if params[:gender] == "Female"
    gender = "0" if params[:gender] == "Male"
    stat = Stats.create(height: params[:height], weight: params[:weight], location: params[:location], gender: gender, age: params[:age])
    redirect_to ("/stats/#{stat.id}")
  end

  def show
    @stats = Stats.find(params[:id])   
  end


end
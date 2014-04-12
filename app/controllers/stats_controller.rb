class StatsController < ApplicationController
  def create
    gender = "1" if params[:gender] == "Female"
    gender = "0" if params[:gender] == "Male"
    @stats = Stats.new(height: params[:height], weight: params[:weight], location: params[:location], gender: gender, age: params[:age])
    if @stats.save
      render :json => {stats: @stats}
    else
      render :json => {stats: nil}
    end
  end

  def show
    @stats = Stats.find(params[:id])   
  end


end
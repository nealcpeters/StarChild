class WelcomeController < ApplicationController
  def index

  end

  def results
    gender = "1" if params[:gender] == "Female"
    gender = "0" if params[:gender] == "Male"
    Stats.create(height: params[:height], weight: params[:weight], location: params[:location], gender: gender, age: params[:age])
  end

end
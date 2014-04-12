class WelcomeController < ApplicationController
  def index

  end

  def results
    
    Stats.create()
  end

end
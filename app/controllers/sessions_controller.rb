class SessionsController < ApplicationController
  respond_to :json

  def new
    puts "new"

  end


  def create

    puts "create"
    puts params
    puts params[:session][:name]
    user = User.find_by_name(params[:session][:name].downcase)

    if user==nil

      render :json => {:errors => "No such user"}
    else
      render :json => user
    end
  end

  def show
    puts "show"
  end

  def destroy

    puts "destroy"
  end
end

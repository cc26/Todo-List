class UsersController < ApplicationController
  respond_to :json

  def index
    respond_with User.all
  end

  def show
    respond_with User.find(params[:id])
  end

  def create
    # begin
      @user = User.create(params[:user])
      errors = @user.errors.full_messages

      if errors.size == 0
        render json: @user
      else
        render json: {errors:errors}
      end
    # rescue
    #    render json: {errors: "how to show error?"}, status: :forbidden
    # end
  end

  def update
    respond_with User.update(params[:id], params[:user])
  end

  def destroy
    respond_with User.destroy(params[:id])
  end
end
